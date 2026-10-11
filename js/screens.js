// The flow of the page: Desktop 8 -> 7 -> 12 -> 18 -> 15 -> 16.

import { hello, marquee, dictionary, alienDelay, ringStep, stepRow, stepLap } from './settings.js'
import { left as stepsLeft, right as stepsRight } from './bars.js'
import { startAudio, startZibZib, togglePlay } from './audio.js'

const $ = (s) => document.querySelector(s)
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches
const RINGS = 5

function fillMarquees() {
  document.querySelectorAll('[data-marquee]').forEach((track) => {
    for (let i = 0; i < 2; i++) {
      const span = document.createElement('span')
      span.textContent = marquee.repeat(6)
      track.appendChild(span)
    }
  })
}

function fillHello() {
  const p = $('#helloText')
  hello.forEach(([text, isAlienWord]) => {
    const node = document.createElement(isAlienWord ? 'em' : 'span')
    node.textContent = text
    p.appendChild(node)
  })
}

// Desktop 19: the tetris steps.
// The pattern from the layout keeps its exact shape and falls down forever as one piece.
// To loop without a seam it is drawn three times, one pattern period apart.
function buildSteps() {
  const ys = [...stepsLeft, ...stepsRight].map(([, y]) => y)
  const period = Math.max(...ys) - Math.min(...ys) + stepRow

  const add = (box, points, side) => {
    box.style.setProperty('--period', period)
    box.style.setProperty('--lap', stepLap + 's')
    const field = document.createElement('div')
    field.className = 'Steps__field'

    ;[-period, 0, period].forEach((shift) =>
      points.forEach(([x, y]) => {
        const step = document.createElement('span')
        step.className = 'Step Step--' + side
        step.style.cssText = `--x:${x};--y:${y + shift}`
        field.appendChild(step)
      })
    )
    box.appendChild(field)
  }

  add($('#stepsLeft'), stepsLeft, 'left')
  add($('#stepsRight'), stepsRight, 'right')
}

// Desktop 22: the Zib-Zib language pop-up behind the question mark
function initLanguage() {
  const popup = $('#language')

  const fill = (el, rows, alienFirst) =>
    rows.forEach(([earth, alien], i) => {
      const word = document.createElement('em')
      word.textContent = alien
      const plain = document.createTextNode(alienFirst ? ' = ' + earth : earth + ' = ')
      if (alienFirst) el.append(word, plain)
      else el.append(plain, word)
      if (i < rows.length - 1) el.append('\n')
    })

  fill($('#languageLeft'), dictionary.left, false)
  fill($('#languageRight'), dictionary.right, true)

  const close = () => {
    popup.hidden = true
    $('#helpButton').focus()
  }

  $('#helpButton').addEventListener('click', () => {
    popup.hidden = false
    $('#languageClose').focus()
  })
  $('#languageClose').addEventListener('click', close)
  popup.addEventListener('click', (e) => e.target === popup && close())
  addEventListener('keydown', (e) => e.key === 'Escape' && !popup.hidden && close())
}

// Desktop 8: the first scroll shakes the screen off
function initIntro(onLeave) {
  const intro = $('#intro')
  let canLeave = reduceMotion
  let left = false

  // wait until every ring has grown
  setTimeout(() => (canLeave = true), RINGS * ringStep + 600)

  const leave = () => {
    if (left || !canLeave) return
    left = true
    intro.classList.add('is-leaving')
    setTimeout(() => {
      intro.hidden = true
      onLeave()
    }, reduceMotion ? 0 : 900)
  }

  addEventListener('wheel', (e) => e.deltaY > 8 && leave(), { passive: true })
  addEventListener('keydown', (e) => ['ArrowDown', 'PageDown', ' '].includes(e.key) && leave())
  let touchY = null
  addEventListener('touchstart', (e) => (touchY = e.touches[0].clientY), { passive: true })
  addEventListener('touchmove', (e) => touchY !== null && touchY - e.touches[0].clientY > 30 && leave(), { passive: true })
  $('#introHint').addEventListener('click', () => {
    canLeave = true
    leave()
  })
}

// Desktop 7: the hello card over the alien screen
function initHello(onStart) {
  const card = $('#hello')

  $('#startButton').addEventListener('click', () => {
    startAudio() // the click is the user gesture browsers need before any sound
    card.classList.add('is-leaving')
    setTimeout(() => {
      card.hidden = true
      onStart()
    }, reduceMotion ? 0 : 400)
  })

  return () => (card.hidden = false)
}

// Desktop 12 -> 18 -> 15 -> 16: the synths ride up exactly as far as the page is scrolled
function initStage() {
  const stage = $('#stage')
  const synths = $('#synths')
  const play = $('#playButton')

  play.addEventListener('click', async () => {
    const on = await togglePlay()
    play.setAttribute('aria-pressed', String(on))
    play.setAttribute('aria-label', on ? 'Выключить синты' : 'Включить синты')
  })

  $('#alienHint').addEventListener('click', () => scrollTo({ top: innerHeight, behavior: reduceMotion ? 'auto' : 'smooth' }))

  let ticking = false
  const update = () => {
    ticking = false
    const p = Math.min(1, Math.max(0, scrollY / innerHeight))
    synths.style.setProperty('--p', p.toFixed(4))
  }
  addEventListener(
    'scroll',
    () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(update)
    },
    { passive: true }
  )
  addEventListener('resize', update)

  return () => {
    document.body.classList.remove('is-locked')
    scrollTo(0, 0)
    update()
    stage.classList.add('has-steps')
    setTimeout(() => stage.classList.add('has-alien'), reduceMotion ? 0 : alienDelay)
  }
}

export function initScreens() {
  startZibZib() // the beeps play from the very first screen
  fillMarquees()
  fillHello()
  buildSteps()
  initLanguage()
  const openStage = initStage()
  const openHello = initHello(openStage)
  initIntro(openHello)
}
