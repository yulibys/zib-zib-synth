// Desktop 16: three columns, built from settings.js.
// Each column: name, Volume, Filter, its own effect knob (Shine / Space / Squelch) and the Type list.

import { synths, controls, waveTypes, effectTitles } from './settings.js'
import { changeValue } from './audio.js'

const values = {}

function el(tag, className, text) {
  const node = document.createElement(tag)
  if (className) node.className = className
  if (text !== undefined) node.textContent = text
  return node
}

// filter is logarithmic, so the low end is not squeezed into a corner
const toNorm = (key, v) => {
  const c = controls[key]
  return key === 'filter' ? Math.log(v / c.min) / Math.log(c.max / c.min) : (v - c.min) / (c.max - c.min)
}
const fromNorm = (key, n) => {
  const c = controls[key]
  if (key === 'filter') return Math.round(c.min * Math.pow(c.max / c.min, n))
  const v = c.min + n * (c.max - c.min)
  return Math.round(v / c.step) * c.step // snaps to the step, so 0..1 knobs keep their fractions
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

export function initSynths(grid) {
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
