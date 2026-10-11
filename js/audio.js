// Tone.js graph (Tone is a global from index.html).
// Every voice has its own chain and its own Channel; all of them run on one Transport.
//   Zib-Zib: recorded beep loop (forward + reversed) -> Freeverb -> channel
//   synthN:  FMSynth / MonoSynth / Synth -> Filter -> its own effects (settings.js) -> channel

import { alienVoice, synths, loopBars } from './settings.js'

const nodes = {}
let isPlaying = false

// ---------------------------------------------------------------- Zib-Zib loop
// The recording is 6 seconds long and ends abruptly. To loop it without a jump we play it
// forward and then backward: the end of the forward pass meets its own mirror, and the
// end of the backward pass is the very first sample again, so there is no seam anywhere.
function pingPong(audioBuffer) {
  const ctx = Tone.getContext().rawContext
  const channels = audioBuffer.numberOfChannels
  const rate = audioBuffer.sampleRate
  const first = audioBuffer.getChannelData(0)

  // skip the silence at the very start of the file
  let start = 0
  while (start < first.length && Math.abs(first[start]) < 0.003) start++
  const len = audioBuffer.length - start

  // the recording is quiet (peak -6 dB), so it is raised to full scale
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

// reads the file into an AudioBuffer; a data: link (sound inlined into one html) is decoded by hand
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

  // tempo chosen so the forward + backward loop is exactly `loopBars` bars:
  // then the synth loops below land on the same downbeat as the beeps
  Tone.Transport.bpm.value = (60 * 4 * loopBars) / loop.duration

  nodes.alien = { channel, player }
}

// ---------------------------------------------------------------- synths
// instrument -> Filter (the slider) -> effects from settings, in order -> channel
function buildSynth(s) {
  const channel = new Tone.Channel({ volume: s.volume }).toDestination()
  const level = new Tone.Volume(s.gain ?? 0).connect(channel)

  let next = level
  const fxNodes = {}
  ;[...s.fx].reverse().forEach((fx) => {
    const node = new Tone[fx.type](fx.options).connect(next)
    fxNodes[fx.type] = node
    if (node.wet) node.wet.value = fx.wet
    if (fx.start) node.start() // LFO effects (AutoFilter, Chorus...) need to be started
    next = node
  })

  const filter = new Tone.Filter({ type: 'lowpass', frequency: s.filter, rolloff: -24 }).connect(next)
  const options = { ...s.synth, oscillator: { type: s.type } }
  // a PolySynth plays chords: it is built from several plain Synth voices
  const synth = (s.kind === 'PolySynth' ? new Tone.PolySynth(Tone.Synth, options) : new Tone[s.kind](options)).connect(filter)

  const part = new Tone.Part(
    (time, note) => synth.triggerAttackRelease(note.noteName, note.duration, time, note.velocity ?? 0.8),
    s.sequence.steps
  ).start(0)
  part.loopEnd = s.sequence.loopEnd
  part.loop = true

  channel.mute = true // silent until the play button
  nodes[s.id] = { channel, level, gain: s.gain ?? 0, filter, synth, fx: fxNodes }
  changeValue(s.id, s.effect, s[s.effect]) // the effect knob starts where settings.js puts it
}

// ---------------------------------------------------------------- public
let building = null

function build() {
  if (building) return building
  building = (async () => {
    // a limiter on the master so the loud Zib-Zib and the synths never clip together
    Tone.Destination.chain(new Tone.Limiter(-1))
    synths.forEach(buildSynth)
    // if the recording cannot load, the synths still play
    try {
      await buildAlien()
    } catch (err) {
      console.warn('Zib-Zib sound did not load:', err)
    }
    Tone.Transport.start('+0.1')
  })()
  return building
}

// Zib-Zib talks from the moment the page opens. Browsers keep all sound off until the visitor
// first clicks, taps or presses a key, so the sound is unlocked on that very first touch.
export function startZibZib() {
  const unlock = () => Tone.start()
  unlock().catch(() => {})
  ;['pointerdown', 'keydown', 'touchend'].forEach((type) => addEventListener(type, unlock, { capture: true }))
  build()
}

export async function startAudio() {
  await Tone.start()
  return build()
}

// the play button brings the three synths in and out over the Zib-Zib loop;
// they run on the same Transport all the time, so they always come in on the beat
export async function togglePlay() {
  await startAudio()
  isPlaying = !isPlaying
  synths.forEach((s) => nodes[s.id] && (nodes[s.id].channel.mute = !isPlaying))
  return isPlaying
}

// a PolySynth has no single oscillator, so its voices are changed through set()
function setOscillator(synth, values) {
  if (synth.oscillator) Object.assign(synth.oscillator, values)
  else synth.set({ oscillator: values })
}

// every control lands here, like handleValueChange in the course examples
export function changeValue(id, property, value) {
  const n = nodes[id]
  if (!n) return

  switch (property) {
    case 'volume':
      n.channel.volume.rampTo(value, 0.05)
      break
    case 'filter':
      n.filter.frequency.rampTo(value, 0.05)
      break
    case 'shine': // FM index: how metallic the bell rings
      n.synth.modulationIndex.rampTo(value, 0.05)
      break
    case 'space': // one knob opens reverb and echo together
      n.fx.Reverb.wet.rampTo(0.1 + value * 0.8, 0.1)
      n.fx.FeedbackDelay.wet.rampTo(value * 0.5, 0.1)
      n.fx.FeedbackDelay.feedback.rampTo(0.15 + value * 0.5, 0.1)
      break
    case 'squelch': // resonance of the bass filter: the higher, the more it quacks
      n.synth.filter.Q.rampTo(value, 0.05)
      // resonance also makes the bass louder (about 0.75 dB per step), so it is evened out
      n.level.volume.rampTo(n.gain - 0.75 * (value - 2), 0.05)
      break
    case 'type':
      setOscillator(n.synth, { type: value })
      break
  }
}
