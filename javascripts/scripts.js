const stepsLeft = [[38.29,74.86],[214.91,74.86],[303.21,74.86],[415.3,83.75],[5.84,95.61],[79.05,95.61],[167.36,95.61],[255.66,95.61],[343.97,95.61],[126.6,120.13],[214.91,120.13],[5.84,144.66],[167.36,144.66],[367.75,149.11],[126.6,169.18],[214.91,169.18],[303.21,169.18],[5.84,189.93],[255.66,189.93],[406.92,210.01],[38.29,214.46],[126.6,214.46],[214.91,214.46],[303.21,214.46],[79.05,238.99],[343.97,238.99],[126.6,264.2],[214.91,264.2],[303.21,264.2],[391.52,281.77],[5.84,284.95],[79.05,284.95],[255.66,284.95],[38.29,309.48],[126.6,309.48],[214.91,309.48],[303.21,309.48],[167.36,334],[343.97,334],[454.47,334],[38.29,358.53],[126.6,358.53],[214.91,358.53],[303.21,358.53],[79.05,379.28],[255.66,379.28],[391.52,384.06],[502.02,388.5],[126.6,403.81],[214.91,403.81],[38.29,428.33],[303.21,428.33],[467.22,437.23],[5.84,449.08],[79.05,449.08],[167.36,449.08],[255.66,449.08],[343.97,449.08],[415.3,469.18],[126.6,473.61],[214.91,473.61],[350.76,491.87],[5.84,498.13],[167.36,498.13],[126.6,522.66],[214.91,522.66],[303.21,522.66],[485.26,534.51],[5.84,543.41],[255.66,543.41],[406.92,547.86],[38.29,567.93],[126.6,567.93],[214.91,567.93],[303.21,567.93],[79.05,592.46],[343.97,592.46],[439.07,613.23],[126.6,617.68],[214.91,617.68],[303.21,617.68],[5.84,638.43],[79.05,638.43],[255.66,638.43],[38.29,662.95],[126.6,662.95],[214.91,662.95],[303.21,662.95],[167.36,687.48],[343.97,687.48],[38.29,712],[126.6,712],[214.91,712],[303.21,712],[79.05,732.76],[255.66,732.76],[38.29,757.28],[126.6,757.28],[214.91,757.28],[303.21,757.28],[5.84,781.81],[167.36,781.81],[343.97,781.81],[126.6,804.95],[38.29,817.21],[5.84,858.04],[79.05,862.49],[38.29,883.24]]

const stepsRight = [[423.73,74.86],[305.02,74.86],[216.71,74.86],[40.1,74.86],[345.77,95.61],[257.47,95.61],[169.16,95.61],[80.85,95.61],[7.64,95.61],[423.73,120.13],[216.71,120.13],[128.4,120.13],[387.35,144.66],[169.16,144.66],[7.64,144.66],[305.02,169.18],[216.71,169.18],[128.4,169.18],[257.47,189.93],[7.64,189.93],[393.32,198.83],[305.02,214.46],[216.71,214.46],[128.4,214.46],[40.1,214.46],[423.73,238.99],[345.77,238.99],[80.85,238.99],[305.02,264.2],[216.71,264.2],[128.4,264.2],[257.47,284.95],[80.85,284.95],[7.64,284.95],[393.32,286.22],[447.5,290.67],[305.02,309.48],[216.71,309.48],[128.4,309.48],[40.1,309.48],[345.77,334],[169.16,334],[471.28,338.45],[305.02,358.53],[216.71,358.53],[128.4,358.53],[40.1,358.53],[257.47,379.28],[80.85,379.28],[376.18,395.65],[443.45,397.4],[216.71,403.81],[128.4,403.81],[305.02,428.33],[40.1,428.33],[434.91,444.63],[345.77,449.08],[257.47,449.08],[169.16,449.08],[80.85,449.08],[7.64,449.08],[216.71,473.61],[128.4,473.61],[169.16,498.13],[7.64,498.13],[376.18,510.72],[305.02,522.66],[216.71,522.66],[128.4,522.66],[257.47,543.41],[7.64,543.41],[305.02,567.93],[216.71,567.93],[128.4,567.93],[40.1,567.93],[447.5,583.56],[345.77,592.46],[80.85,592.46],[305.02,617.68],[216.71,617.68],[128.4,617.68],[257.47,638.43],[80.85,638.43],[7.64,638.43],[305.02,662.95],[216.71,662.95],[128.4,662.95],[40.1,662.95],[345.77,687.48],[169.16,687.48],[305.02,712],[216.71,712],[128.4,712],[40.1,712],[257.47,732.76],[80.85,732.76],[305.02,757.28],[216.71,757.28],[128.4,757.28],[40.1,757.28],[345.77,781.81],[169.16,781.81],[7.64,781.81],[128.4,804.95],[40.1,817.21],[7.64,858.04],[80.85,862.49],[40.1,883.24]]

const marquee = 'Zap Zup, ZipZidi! '

const hello = [
  ['Привееет!! Меня зовут ', false],
  ['Zib-Zib', true],
  ['. Я прилетел с планеты ', false],
  ['Zibzub', true],
  [' и очень \n', false],
  ['zap', true],
  [' с тобой познакомица!! ', false],
  ['Zib zib!!', true],
  [' Я пока плоха знаю ваш земной \nязык, поэтому иногда говорю ', false],
  ['zib-zub', true],
  [' не правельно. Я ', false],
  ['zib zub zab', true],
  [' вашу планету и очень ', false],
  ['zap', true],
  [' найти тут новых ', false],
  ['vip vop!!', true],
  [' Можешь научить меня каким-нибудь земным словам? А я тибя научу своему языку!! ', false],
  ['Blab?', true],
  [' \n', false],
  ['Zаp zub!!', true],
  [' Ой, то есть харашо!! ', false]
]

const alienVoice = { url: 'sounds/zibzib.mp3', volume: -3, reverb: 0.12 }
const loopBars = 6

const dictionary = {
  left: [
    ['я не знаю', 'zab zup'],
    ['я хочу', 'zap'],
    ['люблю тебя', 'zib zub zab'],
    ['привет', 'zap zup'],
    ['скибиди', 'zibzidi'],
    ['хорошо', 'zap zub'],
    ['спокойной ночи', 'zeb zab zab']
  ],
  right: [
    ['доброе утро', 'zeb zab zib'],
    ['окей', 'blab'],
    ['да', 'zib zib'],
    ['нет', 'bleb bleb'],
    ['могу', 'zob zep'],
    ['друг', 'vip vop'],
    ['то же самое', 'zab zab']
  ]
}

const effectTitles = { shine: 'Shine', space: 'Space', squelch: 'Squelch' }

const waveTypes = ['square', 'sawtooth', 'triangle', 'sine']

const controls = {
  volume: { min: -40, max: 0, step: 1 },
  filter: { min: 100, max: 8000, step: 1 },
  shine: { min: 0, max: 15, step: 0.1 },
  space: { min: 0, max: 1, step: 0.01 },
  squelch: { min: 0.5, max: 12, step: 0.1 }
}

const bars = [
  { arp: ['C5', 'Eb5', 'G5', 'Bb5', 'D6'], root: 'C3', fifth: 'G3' },
  { arp: ['C5', 'Eb5', 'G5', 'Bb5', 'D6'], root: 'C3', fifth: 'G3' },
  { arp: ['Eb5', 'G5', 'Ab5', 'C6', 'Eb6'], root: 'Ab2', fifth: 'Eb3' },
  { arp: ['Eb5', 'G5', 'Ab5', 'Bb5', 'C6'], root: 'Ab2', fifth: 'Eb3' },
  { arp: ['F5', 'Ab5', 'C6', 'Eb6', 'G6'], root: 'F2', fifth: 'C3' },
  { arp: ['D5', 'G5', 'B5', 'D6', 'F6'], root: 'G2', fifth: 'D3' }
]

const arpOrder = [0, 2, 4, 3, 1, 3, 2, 4]
const arpSteps = bars.flatMap((bar, b) =>
  arpOrder.map((n, i) => ({
    time: `${b}:${Math.floor(i / 2)}:${(i % 2) * 2}`,
    noteName: bar.arp[n],
    duration: '16n',
    velocity: i % 2 ? 0.7 : 1
  }))
)

const bassSteps = bars.flatMap((bar, b) => [
  { time: `${b}:0:0`, noteName: bar.root, duration: '4n.', velocity: 0.9 },
  { time: `${b}:1:2`, noteName: bar.fifth, duration: '8n', velocity: 0.5 },
  { time: `${b}:2:0`, noteName: bar.root, duration: '4n', velocity: 0.75 },
  { time: `${b}:3:2`, noteName: bar.fifth, duration: '8n', velocity: 0.45 }
])

const synths = [
  {
    id: 'synth1',
    name: 'Synth1',
    volume: -6,
    gain: 11,
    filter: 7000,
    effect: 'shine',
    shine: 3.5,
    type: 'sine',
    kind: 'FMSynth',
    synth: {
      harmonicity: 3,
      modulationIndex: 3.5,
      modulation: { type: 'sine' },
      envelope: { attack: 0.002, decay: 1.1, sustain: 0.12, release: 1 },
      modulationEnvelope: { attack: 0.002, decay: 0.35, sustain: 0.1, release: 0.4 }
    },
    fx: [
      { type: 'PingPongDelay', options: { delayTime: '8n.', feedback: 0.3 }, wet: 0.3 },
      { type: 'Reverb', options: { decay: 5, preDelay: 0.02 }, wet: 0.45 }
    ],
    sequence: { loopEnd: '6m', steps: arpSteps }
  },
  {
    id: 'synth2',
    name: 'Synth2',
    volume: -8,
    gain: 7,
    filter: 2200,
    effect: 'space',
    space: 0.55,
    type: 'sawtooth',
    kind: 'PolySynth',
    synth: { envelope: { attack: 1.2, decay: 0.8, sustain: 0.8, release: 2.5 } },
    fx: [
      { type: 'Chorus', options: { frequency: 0.4, delayTime: 3.5, depth: 0.6 }, wet: 0.5, start: true },
      { type: 'FeedbackDelay', options: { delayTime: '4n.', feedback: 0.4 }, wet: 0.25 },
      { type: 'Reverb', options: { decay: 8, preDelay: 0.05 }, wet: 0.55 }
    ],
    sequence: {
      loopEnd: '6m',
      steps: [
        { time: '0:0:0', noteName: ['G3', 'Bb3', 'D4', 'Eb4'], duration: '1m.', velocity: 0.5 },
        { time: '2:0:0', noteName: ['G3', 'Bb3', 'C4', 'Eb4'], duration: '1m.', velocity: 0.5 },
        { time: '4:0:0', noteName: ['Ab3', 'C4', 'Eb4', 'G4'], duration: '2n.', velocity: 0.5 },
        { time: '5:0:0', noteName: ['G3', 'C4', 'D4', 'F4'], duration: '4n.', velocity: 0.45 },
        { time: '5:2:0', noteName: ['G3', 'B3', 'D4', 'F4'], duration: '4n.', velocity: 0.45 }
      ]
    }
  },
  {
    id: 'synth3',
    name: 'Synth3',
    volume: -10,
    gain: 5,
    filter: 1400,
    effect: 'squelch',
    squelch: 2,
    type: 'sawtooth',
    kind: 'MonoSynth',
    synth: {
      portamento: 0.02,
      filter: { type: 'lowpass', Q: 2, rolloff: -24 },
      envelope: { attack: 0.01, decay: 0.3, sustain: 0.6, release: 0.3 },
      filterEnvelope: { attack: 0.01, decay: 0.2, sustain: 0.5, release: 0.3, baseFrequency: 200, octaves: 2 }
    },
    fx: [{ type: 'Reverb', options: { decay: 2.5, preDelay: 0.01 }, wet: 0.12 }],
    sequence: { loopEnd: '6m', steps: bassSteps }
  }
]

const alienDelay = 1000
const ringStep = 300
const stepRow = 24.52
const stepLap = 14

const nodes = {}
let isPlaying = false

function pingPong(audioBuffer) {
  const ctx = Tone.getContext().rawContext
  const channels = audioBuffer.numberOfChannels
  const rate = audioBuffer.sampleRate
  const first = audioBuffer.getChannelData(0)

  let start = 0
  while (start < first.length && Math.abs(first[start]) < 0.003) start++
  const len = audioBuffer.length - start

  let peak = 0
  for (let c = 0; c < channels; c++) for (const v of audioBuffer.getChannelData(c)) peak = Math.max(peak, Math.abs(v))
  const gain = peak > 0 ? 0.98 / peak : 1

  const out = ctx.createBuffer(channels, len * 2, rate)
  for (let c = 0; c < channels; c++) {
    const src = audioBuffer.getChannelData(c).subarray(start)
    const dst = out.getChannelData(c)
    for (let i = 0; i < len; i++) {
      dst[i] = src[i] * gain
      dst[len + i] = src[len - 1 - i] * gain
    }
  }
  return out
}

async function loadBuffer(url) {
  let bytes
  if (url.startsWith('data:')) {
    const raw = atob(url.slice(url.indexOf(',') + 1))
    bytes = new Uint8Array(raw.length)
    for (let i = 0; i < raw.length; i++) bytes[i] = raw.charCodeAt(i)
    bytes = bytes.buffer
  } else {
    bytes = await (await fetch(url)).arrayBuffer()
  }
  return Tone.getContext().rawContext.decodeAudioData(bytes)
}

async function buildAlien() {
  const channel = new Tone.Channel({ volume: alienVoice.volume }).toDestination()
  const reverb = new Tone.Freeverb({ roomSize: 0.7, dampening: 3000 }).connect(channel)
  reverb.wet.value = alienVoice.reverb

  const source = await loadBuffer(alienVoice.url)
  const loop = new Tone.ToneAudioBuffer(pingPong(source))
  const player = new Tone.Player({ url: loop, loop: true, fadeIn: 0, fadeOut: 0 }).connect(reverb)
  player.sync().start(0)

  Tone.Transport.bpm.value = (60 * 4 * loopBars) / loop.duration

  nodes.alien = { channel, player }
}

function buildSynth(s) {
  const channel = new Tone.Channel({ volume: s.volume }).toDestination()
  const level = new Tone.Volume(s.gain ?? 0).connect(channel)

  let next = level
  const fxNodes = {}
  ;[...s.fx].reverse().forEach((fx) => {
    const node = new Tone[fx.type](fx.options).connect(next)
    fxNodes[fx.type] = node
    if (node.wet) node.wet.value = fx.wet
    if (fx.start) node.start()
    next = node
  })

  const filter = new Tone.Filter({ type: 'lowpass', frequency: s.filter, rolloff: -24 }).connect(next)
  const options = { ...s.synth, oscillator: { type: s.type } }

  const synth = (s.kind === 'PolySynth' ? new Tone.PolySynth(Tone.Synth, options) : new Tone[s.kind](options)).connect(filter)

  const part = new Tone.Part(
    (time, note) => synth.triggerAttackRelease(note.noteName, note.duration, time, note.velocity ?? 0.8),
    s.sequence.steps
  ).start(0)
  part.loopEnd = s.sequence.loopEnd
  part.loop = true

  channel.mute = true
  nodes[s.id] = { channel, level, gain: s.gain ?? 0, filter, synth, fx: fxNodes }
  changeValue(s.id, s.effect, s[s.effect])
}

let building = null

function build() {
  if (building) return building
  building = (async () => {

    Tone.Destination.chain(new Tone.Limiter(-1))
    synths.forEach(buildSynth)

    try {
      await buildAlien()
    } catch (err) {
      console.warn('Zib-Zib sound did not load:', err)
    }
    Tone.Transport.start('+0.1')
  })()
  return building
}

function startZibZib() {
  const unlock = () => Tone.start()
  unlock().catch(() => {})
  ;['pointerdown', 'keydown', 'touchend'].forEach((type) => addEventListener(type, unlock, { capture: true }))
  build()
}

async function startAudio() {
  await Tone.start()
  return build()
}

async function togglePlay() {
  await startAudio()
  isPlaying = !isPlaying
  synths.forEach((s) => nodes[s.id] && (nodes[s.id].channel.mute = !isPlaying))
  return isPlaying
}

function setOscillator(synth, values) {
  if (synth.oscillator) Object.assign(synth.oscillator, values)
  else synth.set({ oscillator: values })
}

function changeValue(id, property, value) {
  const n = nodes[id]
  if (!n) return

  switch (property) {
    case 'volume':
      n.channel.volume.rampTo(value, 0.05)
      break
    case 'filter':
      n.filter.frequency.rampTo(value, 0.05)
      break
    case 'shine':
      n.synth.modulationIndex.rampTo(value, 0.05)
      break
    case 'space':
      n.fx.Reverb.wet.rampTo(0.1 + value * 0.8, 0.1)
      n.fx.FeedbackDelay.wet.rampTo(value * 0.5, 0.1)
      n.fx.FeedbackDelay.feedback.rampTo(0.15 + value * 0.5, 0.1)
      break
    case 'squelch':
      n.synth.filter.Q.rampTo(value, 0.05)

      n.level.volume.rampTo(n.gain - 0.75 * (value - 2), 0.05)
      break
    case 'type':
      setOscillator(n.synth, { type: value })
      break
  }
}

const values = {}

function el(tag, className, text) {
  const node = document.createElement(tag)
  if (className) node.className = className
  if (text !== undefined) node.textContent = text
  return node
}

const toNorm = (key, v) => {
  const c = controls[key]
  return key === 'filter' ? Math.log(v / c.min) / Math.log(c.max / c.min) : (v - c.min) / (c.max - c.min)
}
const fromNorm = (key, n) => {
  const c = controls[key]
  if (key === 'filter') return Math.round(c.min * Math.pow(c.max / c.min, n))
  const v = c.min + n * (c.max - c.min)
  return Math.round(v / c.step) * c.step
}

function Slider(synth, key, title, slot = key) {
  const root = el('div', 'Control Control--' + slot)
  const label = el('label', 'Control__label')
  const id = synth.id + '-' + key
  label.htmlFor = id
  label.append(el('span', 'Control__edge', 'min'), el('span', 'Control__name', title), el('span', 'Control__edge', 'max'))

  const pill = el('div', 'Pill')
  const input = el('input', 'Pill__input')
  Object.assign(input, { id, type: 'range', min: 0, max: 1000, step: 1 })
  input.value = Math.round(toNorm(key, synth[key]) * 1000)
  const dot = el('span', 'Pill__dot')

  const update = () => {
    const n = input.valueAsNumber / 1000
    pill.style.setProperty('--v', n)
    changeValue(synth.id, key, fromNorm(key, n))
  }

  input.addEventListener('input', update)
  pill.style.setProperty('--v', input.valueAsNumber / 1000)
  pill.append(input, dot)
  root.append(label, pill)
  return root
}

function TypeList(synth) {
  const root = el('div', 'Control Control--type')
  const label = el('div', 'Control__label')
  label.appendChild(el('span', 'Control__name', 'Type'))
  const list = el('div', 'Control__list')

  waveTypes.forEach((type) => {
    const button = el('button', 'Pill TypeButton', type)
    button.type = 'button'
    button.setAttribute('aria-pressed', String(type === synth.type))
    button.addEventListener('click', () => {
      list.querySelectorAll('button').forEach((b) => b.setAttribute('aria-pressed', String(b === button)))
      values[synth.id].type = type
      changeValue(synth.id, 'type', type)
    })
    list.appendChild(button)
  })

  root.append(label, list)
  return root
}

function initSynths(grid) {
  synths.forEach((synth, i) => {
    values[synth.id] = { type: synth.type }
    const column = el('article', 'Synth Synth--' + (i + 1))
    column.append(
      el('h3', 'Synth__name', synth.name),
      Slider(synth, 'volume', 'Volume'),
      Slider(synth, 'filter', 'Filter'),
      Slider(synth, synth.effect, effectTitles[synth.effect], 'effect'),
      TypeList(synth)
    )
    grid.appendChild(column)
  })
}

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

function initIntro(onLeave) {
  const intro = $('#intro')
  let canLeave = reduceMotion
  let left = false

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

  let scrolled = 0
  addEventListener(
    'wheel',
    (e) => {
      scrolled = Math.max(0, scrolled + e.deltaY)
      if (scrolled > 30) leave()
    },
    { passive: true }
  )
  setTimeout(() => scrolled > 30 && leave(), RINGS * ringStep + 650)
  addEventListener('keydown', (e) => ['ArrowDown', 'PageDown', ' ', 'Enter'].includes(e.key) && leave())
  let touchY = null
  addEventListener('touchstart', (e) => (touchY = e.touches[0].clientY), { passive: true })
  addEventListener('touchmove', (e) => touchY !== null && touchY - e.touches[0].clientY > 30 && leave(), { passive: true })

  intro.addEventListener('click', () => {
    canLeave = true
    leave()
  })
}

function initHello(onStart) {
  const card = $('#hello')

  $('#startButton').addEventListener('click', () => {
    startAudio()
    card.classList.add('is-leaving')
    setTimeout(() => {
      card.hidden = true
      onStart()
    }, reduceMotion ? 0 : 400)
  })

  return () => (card.hidden = false)
}

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

function initScreens() {
  startZibZib()
  fillMarquees()
  fillHello()
  buildSteps()
  initLanguage()
  const openStage = initStage()
  const openHello = initHello(openStage)
  initIntro(openHello)
}

document.addEventListener('DOMContentLoaded', () => {
  initSynths(document.getElementById('synthGrid'))
  initScreens()
})
