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

const scale = [0, 2, 3, 5, 7, 8, 10]
const progression = [0, 5, 2, 6]
const radii = [128, 168, 208, 248, 288, 328]
const center = [720, 470]
const pinAngle = 168.75
const waves = ['sine', 'square', 'sawtooth', 'triangle']
const filterTypes = ['lowpass', 'highpass', 'bandpass']
const noiseColors = { sine: 'brown', square: 'white', sawtooth: 'white', triangle: 'pink' }

const ranges = {
  cutoff: { min: 60, max: 16000, log: true },
  reso: { min: 0.2, max: 18 },
  attack: { min: 0.001, max: 2, log: true },
  decay: { min: 0.01, max: 2, log: true },
  sustain: { min: 0, max: 1 },
  release: { min: 0.01, max: 4, log: true },
  rate: { min: 0.05, max: 12, log: true },
  depth: { min: 0, max: 1 },
  echo: { min: 0, max: 1 },
  space: { min: 0, max: 1 },
  drive: { min: 0, max: 1 },
  crush: { min: 0, max: 1 },
  volume: { min: -40, max: 6 },
  pan: { min: -1, max: 1 },
  detune: { min: -1200, max: 1200 },
  glide: { min: 0, max: 0.4 },
  rvSpace: { min: 0, max: 0.25 },
  rvDecay: { min: 0.4, max: 12, log: true },
  rvTone: { min: 300, max: 14000, log: true },
  rvMix: { min: 0, max: 1 },
  swing: { min: 0, max: 0.7 },
  steps: { min: 1, max: 16, int: true },
  chance: { min: 0.2, max: 1 },
  out: { min: -36, max: 6 },
  bpm: { min: 60, max: 180, int: true }
}

const tracks = [
  {
    name: 'Zib-Zib',
    kind: 'MembraneSynth',
    base: 24,
    fixed: true,
    duration: '8n',
    wave: 'sine', filter: 'lowpass', cutoff: 900, reso: 1,
    attack: 0.001, decay: 0.35, sustain: 0.01, release: 0.3,
    lfo: 'sine', rate: 0.5, depth: 0,
    echo: 0, space: 0.08, drive: 0.2, crush: 0,
    volume: -4, pan: 0, detune: 0, glide: 0.05
  },
  {
    name: 'Stars',
    kind: 'Synth',
    base: 72,
    duration: '16n',
    wave: 'sawtooth', filter: 'lowpass', cutoff: 2600, reso: 4,
    attack: 0.005, decay: 0.18, sustain: 0.2, release: 0.25,
    lfo: 'triangle', rate: 0.25, depth: 0.35,
    echo: 0.35, space: 0.35, drive: 0, crush: 0,
    volume: -15, pan: 0.15, detune: 0, glide: 0
  },
  {
    name: 'Comet',
    kind: 'Synth',
    base: 36,
    duration: '16n',
    wave: 'square', filter: 'lowpass', cutoff: 520, reso: 6,
    attack: 0.005, decay: 0.25, sustain: 0.5, release: 0.2,
    lfo: 'sine', rate: 0.5, depth: 0,
    echo: 0, space: 0.05, drive: 0.25, crush: 0,
    volume: -12, pan: 0, detune: 0, glide: 0.03
  },
  {
    name: 'Nebula',
    kind: 'PolySynth',
    base: 60,
    chord: true,
    duration: '2n',
    wave: 'sawtooth', filter: 'lowpass', cutoff: 1400, reso: 1,
    attack: 0.8, decay: 0.6, sustain: 0.7, release: 2.2,
    lfo: 'sine', rate: 0.2, depth: 0.3,
    echo: 0.15, space: 0.6, drive: 0, crush: 0,
    volume: -22, pan: 0, detune: 0, glide: 0
  },
  {
    name: 'Orbit',
    kind: 'FMSynth',
    base: 84,
    duration: '8n',
    wave: 'sine', filter: 'highpass', cutoff: 400, reso: 1,
    attack: 0.002, decay: 0.5, sustain: 0.01, release: 1.2,
    lfo: 'sine', rate: 3, depth: 0,
    echo: 0.45, space: 0.5, drive: 0, crush: 0,
    volume: -19, pan: 0.3, detune: 0, glide: 0
  },
  {
    name: 'Pulse',
    kind: 'NoiseSynth',
    base: 0,
    fixed: true,
    duration: '16n',
    wave: 'square', filter: 'highpass', cutoff: 5000, reso: 1.5,
    attack: 0.001, decay: 0.06, sustain: 0.01, release: 0.05,
    lfo: 'sine', rate: 0.5, depth: 0,
    echo: 0.1, space: 0.15, drive: 0, crush: 0,
    volume: -16, pan: -0.25, detune: 0, glide: 0
  }
]

const melody = {
  Stars: [0, 2, 4, 7, 4, 2, 0, 2, 4, 7, 9, 7, 4, 2, 4, 7],
  Comet: [0, 0, 7, 0, 0, 7, 0, 0, 0, 0, 7, 0, 0, 7, 4, 7],
  Orbit: [7, 9, 11, 9, 7, 4, 9, 11, 14, 11, 9, 7, 4, 7, 9, 11]
}

const planets = [
  {
    name: 'zap zup', x: 470, y: 150,
    rows: ['x...x...x...x...', '................', 'x.........x.....', 'x.......x.......', '......x.......x.', '..x...x...x...x.']
  },
  {
    name: 'vip vop', x: 936, y: 150,
    rows: ['x...x...x...x...', 'x.x.x.x.x.x.x.x.', 'x..x..x...x..x..', 'x.......x.......', '..........x.....', '..x.x.x...x.x.xx']
  },
  {
    name: 'zib zub zab', x: 470, y: 760,
    rows: ['x...x...x..xx...', 'xxxxxxxxxxxxxxxx', 'x.xx..x.x.xx..x.', 'x.......x.......', '...x......x...x.', 'x.xxx.xxx.xxx.xx']
  },
  {
    name: 'zeb zab zab', x: 936, y: 760,
    rows: ['................', 'x..x..x..x..x...', 'x...............', 'x...............', 'x..x..x...x..x..', '....x.......x...']
  }
]

const liveButtons = [
  { key: 'hold', title: 'Зажми, чтобы зациклить долю', icon: 'M12 9V27M18 9V27M24 9V27' },
  { key: 'auto', title: 'Авто: каждые 4 такта следующая планета', icon: 'M11 25L25 11M14 11H25V22' },
  { key: 'rewind', title: 'С начала', icon: 'M18 11L9 18L18 25ZM27 11L18 18L27 25Z' },
  { key: 'zib', title: 'Голос Zib-Zib', icon: 'M18 8V28M9.3 13L26.7 23M9.3 23L26.7 13' }
]

const icons = {
  sine: 'M1 8Q5.5 0 10 8T19 8T28 8T37 8',
  square: 'M1 13V3H10V13H19V3H28V13H37',
  sawtooth: 'M1 13L10 3V13L19 3V13L28 3V13L37 3',
  triangle: 'M1 13L10 3L19 13L28 3L37 13',
  lowpass: 'M1 6H22Q28 6 30 9L36 15',
  highpass: 'M2 15L8 9Q10 6 16 6H37',
  bandpass: 'M1 15Q10 15 14 9Q19 2 24 9Q28 15 37 15',
  pause: 'M15 11V33M29 11V33'
}

const alienDelay = 200
const ringStep = 300
const stepRow = 24.52
const stepLap = 14

const nodes = {}
let alienOn = true

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
  nodes.voiceBuffer = new Tone.ToneAudioBuffer(source)
  const loop = new Tone.ToneAudioBuffer(pingPong(source))
  const player = new Tone.Player({ url: loop, loop: true, fadeIn: 0, fadeOut: 0 }).connect(reverb)
  player.sync().start(0)

  state.baseBpm = (60 * 4 * loopBars) / loop.duration
  state.bpm = Math.round(state.baseBpm)
  player.playbackRate = state.bpm / state.baseBpm
  Tone.Transport.bpm.value = state.bpm

  channel.mute = !alienOn
  nodes.alien = { channel, player }
  refreshAll()
}

let building = null

function build() {
  if (building) return building
  building = (async () => {
    Tone.Destination.chain(new Tone.Limiter(-1))
    Tone.Transport.bpm.value = state.bpm
    buildDeckAudio()
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

function startDeck() {
  state.playing = true
  state.pos = 0
  refreshAll()
}

async function toggleAlien() {
  await startAudio()
  alienOn = !alienOn
  if (nodes.alien) nodes.alien.channel.mute = !alienOn
  return alienOn
}

const state = {
  playing: false,
  pos: 0,
  scene: 0,
  queued: null,
  auto: false,
  hold: null,
  selected: 1,
  masterOn: true,
  bpm: 121,
  baseBpm: 121,
  swing: 0,
  chance: 1,
  out: 0,
  rvSpace: 0.03,
  rvDecay: 4,
  rvTone: 5000,
  rvMix: 0.8,
  lengths: tracks.map(() => 16),
  muted: tracks.map(() => false),
  solo: tracks.map(() => false),
  scenes: planets.map((p) =>
    p.rows.map((row, i) => ({
      on: [...row].map((c) => c === 'x'),
      deg: (melody[tracks[i].name] || Array(16).fill(0)).slice()
    }))
  )
}

const defaults = tracks.map((t) => ({ ...t }))
const globalDefaults = { ...state }
const trackKeys = ['wave', 'filter', 'cutoff', 'reso', 'attack', 'lfo', 'rate', 'echo', 'space', 'drive', 'crush', 'volume', 'pan', 'detune', 'glide', 'mute']
let audio = null

const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v))
const toNorm = (key, v) => {
  const r = ranges[key]
  return clamp(r.log ? Math.log(v / r.min) / Math.log(r.max / r.min) : (v - r.min) / (r.max - r.min))
}
const fromNorm = (key, n) => {
  const r = ranges[key]
  const v = r.log ? r.min * Math.pow(r.max / r.min, n) : r.min + n * (r.max - r.min)
  return r.int ? Math.round(v) : v
}
const pitch = (base, degree) => {
  const d = ((degree % 7) + 7) % 7
  return base + Math.floor(degree / 7) * 12 + scale[d]
}
const hz = (midi) => 440 * Math.pow(2, (midi - 69) / 12)

function buildTrack(t, i) {
  const channel = new Tone.Channel({ volume: t.volume, pan: t.pan }).connect(audio.master)
  const echoSend = new Tone.Gain(t.echo).connect(audio.echo)
  const spaceSend = new Tone.Gain(t.space).connect(audio.reverbIn)
  const meter = new Tone.Meter({ smoothing: 0.8 })
  channel.fan(echoSend, spaceSend, meter)

  let crusher = null
  try {
    crusher = new Tone.BitCrusher(16)
    crusher.wet.value = 0
  } catch (err) {
    crusher = null
  }
  const drive = new Tone.Distortion({ distortion: 0, wet: 0 })
  const filter = new Tone.Filter({ type: t.filter, frequency: t.cutoff, Q: t.reso, rolloff: -12 })
  const lfo = new Tone.LFO({ type: t.lfo, frequency: t.rate, min: t.cutoff, max: t.cutoff }).connect(filter.frequency).start()
  const synth = t.kind === 'PolySynth' ? new Tone.PolySynth(Tone.Synth, { maxPolyphony: 8 }) : new Tone[t.kind]()

  if (crusher) synth.chain(filter, drive, crusher, channel)
  else synth.chain(filter, drive, channel)

  audio.tracks[i] = { synth, filter, drive, crusher, lfo, channel, echoSend, spaceSend, meter }
  trackKeys.forEach((key) => applyTrack(i, key))
}

function applyTrack(i, key) {
  const t = tracks[i]
  const n = audio && audio.tracks[i]
  if (!n) return
  const env = () => n.synth.set({ envelope: { attack: t.attack, decay: t.decay, sustain: t.sustain, release: t.release } })

  switch (key) {
    case 'wave':
      n.synth.set(t.kind === 'NoiseSynth' ? { noise: { type: noiseColors[t.wave] } } : { oscillator: { type: t.wave } })
      break
    case 'filter':
      n.filter.type = t.filter
      break
    case 'cutoff':
    case 'depth': {
      const r = Math.pow(2, t.depth * 3)
      n.lfo.min = Math.max(20, t.cutoff / r)
      n.lfo.max = Math.min(18000, t.cutoff * r)
      break
    }
    case 'reso':
      n.filter.Q.rampTo(t.reso, 0.05)
      break
    case 'attack':
    case 'decay':
    case 'sustain':
    case 'release':
      env()
      break
    case 'lfo':
      n.lfo.type = t.lfo
      break
    case 'rate':
      n.lfo.frequency.rampTo(t.rate, 0.1)
      break
    case 'echo':
      n.echoSend.gain.rampTo(t.echo, 0.05)
      break
    case 'space':
      n.spaceSend.gain.rampTo(t.space, 0.05)
      break
    case 'drive':
      n.drive.distortion = t.drive * 0.9
      n.drive.wet.rampTo(Math.min(1, t.drive * 3), 0.05)
      break
    case 'crush':
      if (n.crusher) {
        n.crusher.set({ bits: Math.round(16 - t.crush * 13) })
        n.crusher.wet.rampTo(t.crush > 0 ? 1 : 0, 0.05)
      }
      break
    case 'volume':
      n.channel.volume.rampTo(t.volume, 0.05)
      break
    case 'pan':
      n.channel.pan.rampTo(t.pan, 0.05)
      break
    case 'detune':
      if (t.kind !== 'NoiseSynth') n.synth.set({ detune: t.detune })
      break
    case 'glide':
      if (t.kind === 'MembraneSynth') n.synth.set({ pitchDecay: 0.005 + t.glide * 0.5 })
      else if (t.kind !== 'NoiseSynth') n.synth.set({ portamento: t.glide })
      break
    case 'mute':
      n.channel.mute = state.muted[i]
      n.channel.solo = state.solo[i]
      break
  }
}

let reverbTimer = 0

function applyGlobal(key) {
  if (!audio) return
  switch (key) {
    case 'rvSpace':
    case 'rvDecay':
      clearTimeout(reverbTimer)
      reverbTimer = setTimeout(() => {
        audio.reverb.decay = state.rvDecay
        audio.reverb.preDelay = state.rvSpace
      }, 250)
      break
    case 'rvTone':
      audio.rvTone.frequency.rampTo(state.rvTone, 0.1)
      break
    case 'rvMix':
      audio.rvReturn.gain.rampTo(state.rvMix, 0.1)
      break
    case 'swing':
      Tone.Transport.swing = state.swing
      break
    case 'out':
      audio.master.volume.rampTo(state.out, 0.05)
      break
    case 'masterOn':
      audio.master.mute = !state.masterOn
      break
    case 'bpm':
      Tone.Transport.bpm.rampTo(state.bpm, 0.1)
      if (nodes.alien) nodes.alien.player.playbackRate = state.bpm / state.baseBpm
      break
  }
}

function trigger(i, step, time, root, degree) {
  const t = tracks[i]
  const synth = audio.tracks[i].synth
  if (t.kind === 'NoiseSynth') synth.triggerAttackRelease(t.duration, time, step % 8 === 4 ? 1 : 0.45)
  else if (t.fixed) synth.triggerAttackRelease(hz(t.base), t.duration, time, 0.95)
  else if (t.chord) synth.triggerAttackRelease([0, 2, 4].map((d) => hz(pitch(t.base, root + degree + d))), t.duration, time, 0.6)
  else synth.triggerAttackRelease(hz(pitch(t.base, root + degree)), t.duration, time, step % 4 === 0 ? 0.95 : 0.75)
}

function tick(time) {
  if (!state.playing) return
  if (state.pos % 16 === 0 && state.hold === null) {
    const bar = state.pos / 16
    if (state.queued !== null) {
      state.scene = state.queued
      state.queued = null
    } else if (state.auto && bar > 0 && bar % 4 === 0) {
      state.scene = (state.scene + 1) % planets.length
    }
  }
  const pos = state.hold === null ? state.pos : state.hold + ((state.pos - state.hold) % 2)
  const root = progression[Math.floor(pos / 16) % progression.length]
  const played = []
  tracks.forEach((t, i) => {
    const s = pos % state.lengths[i]
    const pat = state.scenes[state.scene][i]
    if (pat.on[s] && Math.random() < state.chance) {
      trigger(i, s, time, root, pat.deg[s])
      played.push(i)
    }
  })
  Tone.Draw.schedule(() => drawTick(pos, played), time)
  state.pos++
}

function buildDeckAudio() {
  audio = { tracks: [] }
  audio.master = new Tone.Volume(state.out).toDestination()
  audio.meter = new Tone.Meter({ channels: 2, smoothing: 0.75 })
  audio.master.connect(audio.meter)
  audio.echo = new Tone.PingPongDelay({ delayTime: '8n.', feedback: 0.38, wet: 1 }).connect(audio.master)
  audio.reverbIn = new Tone.Gain(1)
  audio.reverb = new Tone.Reverb({ decay: state.rvDecay, preDelay: state.rvSpace, wet: 1 })
  audio.rvTone = new Tone.Filter({ type: 'lowpass', frequency: state.rvTone })
  audio.rvReturn = new Tone.Gain(state.rvMix)
  audio.reverbIn.chain(audio.reverb, audio.rvTone, audio.rvReturn, audio.master)
  audio.echo.connect(new Tone.Gain(0.3).connect(audio.reverbIn))

  audio.voice = new Tone.Volume(-2).connect(audio.master)
  audio.voice.fan(new Tone.Gain(0.35).connect(audio.echo), new Tone.Gain(0.6).connect(audio.reverbIn))

  tracks.forEach(buildTrack)
  Tone.Transport.swingSubdivision = '16n'
  ;['swing', 'out', 'masterOn'].forEach(applyGlobal)
  new Tone.Loop(tick, '16n').start(0)
}

function playVoice() {
  if (!audio || !nodes.voiceBuffer) return
  const player = new Tone.Player(nodes.voiceBuffer).connect(audio.voice)
  player.playbackRate = [0.85, 1, 1.15, 1.3][Math.floor(Math.random() * 4)]
  player.start(Tone.now(), 0, Math.min(1.4, nodes.voiceBuffer.duration))
  player.onstop = () => setTimeout(() => player.dispose(), 100)
  pulse(1)
}

const svgNS = 'http://www.w3.org/2000/svg'
const refreshers = []
const view = { rows: [], rings: [], wires: [], pins: [], planets: [], live: {}, pulses: [], flash: 0, visible: false }

function el(tag, className, parent, text) {
  const node = document.createElement(tag)
  if (className) node.className = className
  if (text !== undefined) node.textContent = text
  if (parent) parent.appendChild(node)
  return node
}

function svgEl(tag, attrs, parent) {
  const node = document.createElementNS(svgNS, tag)
  Object.entries(attrs || {}).forEach(([k, v]) => node.setAttribute(k, v))
  if (parent) parent.appendChild(node)
  return node
}

function place(node, x, y, w, h) {
  node.classList.add('A')
  node.style.setProperty('--x', x)
  node.style.setProperty('--y', y)
  if (w !== undefined) node.style.setProperty('--w', w)
  if (h !== undefined) node.style.setProperty('--h', h)
  return node
}

function label(parent, str, x, cy, size = 14, align = 'left', extra = '') {
  const node = el('span', `T T--${align} ${size < 15 ? 'T--light' : ''} ${extra}`, parent, str)
  node.style.setProperty('--x', x)
  node.style.setProperty('--y', cy - size * 0.6)
  node.style.setProperty('--fs', size)
  return node
}

function icon(parent, path, w, h, box = '0 0 38 16') {
  const svg = svgEl('svg', { viewBox: box, 'aria-hidden': 'true', class: 'Icon' }, parent)
  svg.style.width = `calc(${w} * var(--u))`
  svg.style.height = `calc(${h} * var(--u))`
  svgEl('path', { d: path }, svg)
  return svg
}

function arcPath(cx, cy, r, a0, a1) {
  const p = (a) => [cx + r * Math.cos((a * Math.PI) / 180), cy + r * Math.sin((a * Math.PI) / 180)]
  const [x0, y0] = p(a0)
  const [x1, y1] = p(a1)
  return `M${x0.toFixed(2)} ${y0.toFixed(2)}A${r} ${r} 0 ${a1 - a0 > 180 ? 1 : 0} 1 ${x1.toFixed(2)} ${y1.toFixed(2)}`
}

function draggable(node, getN, setN, step = 0.02) {
  let startY = 0
  let startN = 0
  node.addEventListener('pointerdown', (e) => {
    node.setPointerCapture(e.pointerId)
    startY = e.clientY
    startN = getN()
    node.classList.add('is-dragging')
  })
  node.addEventListener('pointermove', (e) => {
    if (!node.hasPointerCapture(e.pointerId)) return
    setN(clamp(startN + (startY - e.clientY) / (e.shiftKey ? 700 : 170)))
  })
  const end = () => node.classList.remove('is-dragging')
  node.addEventListener('pointerup', end)
  node.addEventListener('pointercancel', end)
  node.addEventListener(
    'wheel',
    (e) => {
      e.preventDefault()
      setN(clamp(getN() - Math.sign(e.deltaY) * step * 1.5))
    },
    { passive: false }
  )
  node.addEventListener('keydown', (e) => {
    const map = { ArrowUp: step, ArrowRight: step, ArrowDown: -step, ArrowLeft: -step, PageUp: 0.1, PageDown: -0.1 }
    if (e.key in map) setN(clamp(getN() + map[e.key]))
    else if (e.key === 'Home') setN(0)
    else if (e.key === 'End') setN(1)
    else return
    e.preventDefault()
  })
}

function Knob(parent, { cx, cy, d, name, key, get, set, reset, labelCy }) {
  const node = place(el('div', 'Knob', parent), cx - d / 2, cy - d / 2, d, d)
  Object.assign(node, { tabIndex: 0 })
  node.setAttribute('role', 'slider')
  node.setAttribute('aria-label', name)
  node.setAttribute('aria-valuemin', 0)
  node.setAttribute('aria-valuemax', 100)
  const svg = svgEl('svg', { viewBox: `0 0 ${d} ${d}`, 'aria-hidden': 'true' }, node)
  const r = d / 2 - 4
  svgEl('path', { class: 'Knob__track', d: arcPath(d / 2, d / 2, r, 135, 405) }, svg)
  const value = svgEl('path', { class: 'Knob__value' }, svg)
  const pointer = svgEl('circle', { class: 'Knob__pointer', r: d > 30 ? 3 : 2 }, svg)
  if (labelCy) label(parent, name, cx, labelCy, 14, 'center')

  const refresh = () => {
    const n = toNorm(key, get())
    value.setAttribute('d', n > 0.004 ? arcPath(d / 2, d / 2, r, 135, 135 + 270 * n) : '')
    const a = ((135 + 270 * n) * Math.PI) / 180
    const pr = d / 2 - Math.max(7, d * 0.24)
    pointer.setAttribute('cx', d / 2 + pr * Math.cos(a))
    pointer.setAttribute('cy', d / 2 + pr * Math.sin(a))
    node.setAttribute('aria-valuenow', Math.round(n * 100))
  }
  draggable(
    node,
    () => toNorm(key, get()),
    (n) => {
      set(fromNorm(key, n))
      refresh()
    }
  )
  node.addEventListener('dblclick', () => {
    set(reset())
    refresh()
  })
  refreshers.push(refresh)
  refresh()
  return node
}

function PillGroup(parent, items, get, set, name) {
  const buttons = items.map((it) => {
    const b = place(el('button', 'Pill', parent), it.x, it.y, it.w, it.h)
    b.type = 'button'
    b.setAttribute('aria-label', `${name}: ${it.value}`)
    icon(b, icons[it.value], it.iw, it.ih)
    b.addEventListener('click', () => {
      set(it.value)
      refresh()
    })
    return b
  })
  const refresh = () => buttons.forEach((b, i) => b.setAttribute('aria-pressed', String(items[i].value === get())))
  refreshers.push(refresh)
  refresh()
}

const sel = () => tracks[state.selected]

function setTrack(key, v, i = state.selected) {
  tracks[i][key] = v
  applyTrack(i, key)
}

function trackKnob(parent, key, name, cx, cy, d, labelCy) {
  return Knob(parent, {
    cx, cy, d, key, name, labelCy,
    get: () => sel()[key],
    set: (v) => setTrack(key, v),
    reset: () => defaults[state.selected][key]
  })
}

function globalKnob(parent, key, name, cx, cy, d, labelCy) {
  return Knob(parent, {
    cx, cy, d, key, name, labelCy,
    get: () => state[key],
    set: (v) => {
      state[key] = v
      applyGlobal(key)
    },
    reset: () => globalDefaults[key]
  })
}

function refreshAll() {
  refreshers.forEach((f) => f())
}

function select(i) {
  state.selected = i
  refreshAll()
}

function MuteSolo(parent, kind, i, x, y, w, h, round) {
  const b = place(el('button', `Toggle ${round ? 'Toggle--round' : ''}`, parent), x, y, w, h)
  b.type = 'button'
  label(b, kind === 'muted' ? 'M' : 'S', w / 2, h / 2 + 1, 15, 'center')
  b.addEventListener('click', (e) => {
    e.stopPropagation()
    const idx = i === null ? state.selected : i
    state[kind][idx] = !state[kind][idx]
    applyTrack(idx, 'mute')
    refreshAll()
  })
  refreshers.push(() => {
    const idx = i === null ? state.selected : i
    b.setAttribute('aria-pressed', String(state[kind][idx]))
    b.setAttribute('aria-label', `${kind === 'muted' ? 'Mute' : 'Solo'} ${tracks[idx].name}`)
  })
}

function Screen(parent, x, y, w, h) {
  return place(el('div', 'Screen', parent), x, y, w, h)
}

function buildLeft(deck) {
  const p = place(el('section', 'Panel', deck), 30, 62, 350, 780)
  p.setAttribute('aria-label', 'Master')
  const head = place(el('div', 'Panel__head', p), 0, 0, 350, 54)
  label(head, 'master', 16, 27, 29, 'left', 'T--dark')
  view.vu = [10, 16, 22, 13].map((h, i) => place(el('span', 'Vu', head), 226 + i * 9, 14, 5, 26))
  const sw = place(el('button', 'Switch', head), 272, 13, 62, 28)
  sw.type = 'button'
  sw.setAttribute('aria-label', 'Master on / off')
  el('span', 'Switch__dot', sw)
  sw.addEventListener('click', () => {
    state.masterOn = !state.masterOn
    applyGlobal('masterOn')
    refreshAll()
  })
  refreshers.push(() => sw.setAttribute('aria-pressed', String(state.masterOn)))

  label(p, 'reverb', 16, 76, 20)
  const screen = Screen(p, 16, 92, 318, 112)
  view.canvas = el('canvas', 'Screen__canvas', screen)
  ;[['rvSpace', 'space'], ['rvDecay', 'decay'], ['rvTone', 'tone'], ['rvMix', 'mix']].forEach(([key, name], i) =>
    globalKnob(p, key, name, 46 + i * 86, 228, 44, 265)
  )

  label(p, 'mixer', 16, 298, 20)
  tracks.forEach((t, i) => {
    const y = 314 + i * 45
    const cy = y + 19
    const row = place(el('div', 'Row', p), 16, y, 318, 38)
    row.addEventListener('click', () => select(i))
    const name = place(el('button', 'Row__name', row), 0, 0, 92, 38)
    name.type = 'button'
    name.setAttribute('aria-label', `Выбрать ${t.name}`)
    label(name, t.name, 10, 19, 19)
    const bars = Array.from({ length: 7 }, (_, b) => {
      const h = 5 + b * 2.4
      return place(el('span', 'Row__bar', row), 96 + b * 11, 28 - h, 7, h)
    })
    Knob(row, {
      cx: 190, cy: 19, d: 26, key: 'pan', name: `pan ${t.name}`,
      get: () => tracks[i].pan,
      set: (v) => setTrack('pan', v, i),
      reset: () => 0
    })
    MuteSolo(row, 'muted', i, 216, 7, 36, 24)
    MuteSolo(row, 'solo', i, 260, 7, 36, 24)
    place(el('span', 'Row__jack', row), 314, 15, 8, 8)
    view.rows.push({ row, bars, lit: -1 })
    refreshers.push(() => row.classList.toggle('is-active', state.selected === i))
  })

  place(el('span', 'Divider', p), 16, 592, 318, 1.5)
  label(p, 'pattern', 16, 616, 20)
  globalKnob(p, 'swing', 'swing', 46, 656, 44, 692)
  Knob(p, {
    cx: 132, cy: 656, d: 44, key: 'steps', name: 'steps', labelCy: 692,
    get: () => state.lengths[state.selected],
    set: (v) => {
      state.lengths[state.selected] = v
      refreshSteps()
    },
    reset: () => 16
  })
  globalKnob(p, 'chance', 'chance', 218, 656, 44, 692)
  globalKnob(p, 'out', 'out', 304, 656, 44, 692)

  const actions = {
    random: () => {
      const pat = state.scenes[state.scene][state.selected]
      const density = [0.35, 0.6, 0.4, 0.15, 0.3, 0.6][state.selected]
      const degs = [0, 2, 4, 7, 9, 4, 2, 11]
      pat.on = pat.on.map((_, s) => Math.random() < (s % 4 === 0 ? density + 0.25 : density))
      pat.deg = pat.deg.map(() => degs[Math.floor(Math.random() * degs.length)])
    },
    clear: () => (state.scenes[state.scene][state.selected].on = Array(16).fill(false)),
    shift: () => {
      const pat = state.scenes[state.scene][state.selected]
      pat.on.unshift(pat.on.pop())
      pat.deg.unshift(pat.deg.pop())
    }
  }
  Object.keys(actions).forEach((key, i) => {
    const b = place(el('button', 'Action', p), 16 + i * 110, 708, 98, 30)
    b.type = 'button'
    label(b, key, 49, 15, 14, 'center')
    b.addEventListener('click', () => {
      actions[key]()
      refreshSteps()
      b.classList.remove('is-flash')
      void b.offsetWidth
      b.classList.add('is-flash')
    })
  })

  view.out = [0, 1].map((row) => ({
    peak: 0,
    lit: -1,
    cells: Array.from({ length: 32 }, (_, s) => place(el('span', `Out ${s > 17 ? 'Out--hot' : ''}`, p), 16 + s * 10, 750 + row * 12, 7, 8))
  }))
}

function buildRight(deck) {
  const p = place(el('section', 'Panel', deck), 1060, 62, 350, 780)
  p.setAttribute('aria-label', 'Выбранный трек')
  const head = place(el('div', 'Panel__head', p), 0, 0, 350, 54)
  const title = label(head, '', 16, 27, 30, 'left', 'T--dark')
  refreshers.push(() => (title.textContent = sel().name))
  MuteSolo(head, 'muted', null, 236, 13, 44, 28, true)
  MuteSolo(head, 'solo', null, 290, 13, 44, 28, true)

  label(p, 'wave', 16, 76, 20)
  PillGroup(p, waves.map((w, i) => ({ value: w, x: 16 + i * 81, y: 92, w: 74, h: 32, iw: 38, ih: 16 })), () => sel().wave, (v) => setTrack('wave', v), 'wave')

  label(p, 'filter', 16, 150, 20)
  PillGroup(p, filterTypes.map((f, i) => ({ value: f, x: 16 + i * 60, y: 170, w: 54, h: 32, iw: 38, ih: 17 })), () => sel().filter, (v) => setTrack('filter', v), 'filter')
  trackKnob(p, 'cutoff', 'cutoff', 232, 186, 44, 222)
  trackKnob(p, 'reso', 'reso', 300, 186, 44, 222)

  label(p, 'envelope', 16, 250, 20)
  buildEnvelope(p)

  label(p, 'lfo', 16, 378, 20)
  PillGroup(p, waves.map((w, i) => ({ value: w, x: 16 + i * 48, y: 398, w: 42, h: 28, iw: 30, ih: 14 })), () => sel().lfo, (v) => setTrack('lfo', v), 'lfo')
  trackKnob(p, 'rate', 'rate', 232, 412, 44, 448)
  trackKnob(p, 'depth', 'depth', 300, 412, 44, 448)

  label(p, 'fx', 16, 476, 20)
  ;['echo', 'space', 'drive', 'crush'].forEach((key, i) => trackKnob(p, key, key, 46 + i * 86, 512, 44, 548))
  buildPad(p)

  label(p, 'channel', 16, 704, 20)
  ;['volume', 'pan', 'detune', 'glide'].forEach((key, i) => trackKnob(p, key, key, 46 + i * 86, 734, 40, 766))
}

function buildEnvelope(p) {
  const box = Screen(p, 16, 266, 318, 72)
  const svg = svgEl('svg', { viewBox: '0 0 318 72', class: 'Env', role: 'img', 'aria-label': 'ADSR envelope' }, box)
  const fill = svgEl('path', { class: 'Env__fill' }, svg)
  const line = svgEl('path', { class: 'Env__line' }, svg)
  const dots = [0, 1, 2, 3].map(() => svgEl('circle', { class: 'Env__dot', r: 4.5 }, svg))
  const names = ['A', 'D', 'S', 'R'].map((n) => label(p, n, 0, 352, 14, 'center'))
  const geo = () => {
    const t = sel()
    const ax = 16 + toNorm('attack', t.attack) * 60
    const dx = ax + 6 + toNorm('decay', t.decay) * 60
    const sy = 62 - t.sustain * 52
    const sx = dx + 36
    const rx = sx + 6 + toNorm('release', t.release) * 120
    return { pts: [[10, 62], [ax, 10], [dx, sy], [sx, sy], [rx, 62]], ax, dx, sx }
  }
  const refresh = () => {
    const { pts } = geo()
    const d = pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`).join('')
    line.setAttribute('d', d)
    fill.setAttribute('d', `${d}L${pts[4][0].toFixed(1)} 72L10 72Z`)
    pts.slice(1).forEach(([x, y], i) => {
      dots[i].setAttribute('cx', x)
      dots[i].setAttribute('cy', y)
      names[i].style.setProperty('--x', 16 + x)
    })
  }
  let grab = -1
  const point = (e) => {
    const r = svg.getBoundingClientRect()
    return [((e.clientX - r.left) / r.width) * 318, ((e.clientY - r.top) / r.height) * 72]
  }
  svg.addEventListener('pointerdown', (e) => {
    const [x, y] = point(e)
    const { pts } = geo()
    let best = 1e9
    pts.slice(1).forEach(([px, py], i) => {
      const dist = Math.hypot(px - x, (py - y) * 0.6)
      if (dist < best) {
        best = dist
        grab = i
      }
    })
    svg.setPointerCapture(e.pointerId)
  })
  svg.addEventListener('pointermove', (e) => {
    if (grab < 0 || !svg.hasPointerCapture(e.pointerId)) return
    const [x, y] = point(e)
    const g = geo()
    const sus = clamp((62 - y) / 52)
    if (grab === 0) setTrack('attack', fromNorm('attack', clamp((x - 16) / 60)))
    if (grab === 1) {
      setTrack('decay', fromNorm('decay', clamp((x - g.ax - 6) / 60)))
      setTrack('sustain', sus)
    }
    if (grab === 2) setTrack('sustain', sus)
    if (grab === 3) setTrack('release', fromNorm('release', clamp((x - g.sx - 6) / 120)))
    refresh()
  })
  svg.addEventListener('pointerup', () => (grab = -1))
  refreshers.push(refresh)
}

function buildPad(p) {
  const box = Screen(p, 16, 566, 318, 120)
  box.classList.add('Pad')
  box.setAttribute('role', 'slider')
  box.setAttribute('aria-label', 'XY pad: cutoff и echo')
  box.tabIndex = 0
  const svg = svgEl('svg', { viewBox: '0 0 318 120', 'aria-hidden': 'true' }, box)
  const vx = svgEl('line', { class: 'Pad__line', y1: 0, y2: 120 }, svg)
  const hy = svgEl('line', { class: 'Pad__line', x1: 0, x2: 318 }, svg)
  const dot = svgEl('circle', { class: 'Pad__dot', r: 9 }, svg)
  label(box, 'echo', 10, 14, 12)
  label(box, 'cutoff', 308, 108, 12, 'right')
  const refresh = () => {
    const x = 10 + toNorm('cutoff', sel().cutoff) * 298
    const y = 10 + (1 - sel().echo) * 100
    vx.setAttribute('x1', x)
    vx.setAttribute('x2', x)
    hy.setAttribute('y1', y)
    hy.setAttribute('y2', y)
    dot.setAttribute('cx', x)
    dot.setAttribute('cy', y)
  }
  const move = (e) => {
    const r = box.getBoundingClientRect()
    setTrack('cutoff', fromNorm('cutoff', clamp((e.clientX - r.left) / r.width)))
    setTrack('echo', clamp(1 - (e.clientY - r.top) / r.height))
    refreshAll()
  }
  box.addEventListener('pointerdown', (e) => {
    box.setPointerCapture(e.pointerId)
    move(e)
  })
  box.addEventListener('pointermove', (e) => box.hasPointerCapture(e.pointerId) && move(e))
  box.addEventListener('keydown', (e) => {
    const t = sel()
    const dx = { ArrowLeft: -0.03, ArrowRight: 0.03 }[e.key] || 0
    const dy = { ArrowUp: 0.05, ArrowDown: -0.05 }[e.key] || 0
    if (!dx && !dy) return
    e.preventDefault()
    setTrack('cutoff', fromNorm('cutoff', clamp(toNorm('cutoff', t.cutoff) + dx)))
    setTrack('echo', clamp(t.echo + dy))
    refreshAll()
  })
  refreshers.push(refresh)
}

const stepXY = (r, c) => {
  const a = ((-90 + c * 22.5) * Math.PI) / 180
  return [center[0] + (r - 20) * Math.cos(a), center[1] + (r - 20) * Math.sin(a)]
}

function buildOrbits(deck) {
  const orbits = place(el('div', 'Orbits', deck), 0, 0, 1440, 900)
  view.sweep = place(el('div', 'Sweep', orbits), center[0] - 340, center[1] - 340, 680, 680)
  radii.forEach((r, i) => {
    const ring = place(el('div', 'Orbit', orbits), center[0] - r, center[1] - r, r * 2, r * 2)
    const steps = Array.from({ length: 16 }, (_, c) => {
      const [x, y] = stepXY(r, c)
      const b = place(el('button', 'Beat', orbits), x - 11, y - 11, 22, 22)
      b.type = 'button'
      b.setAttribute('aria-label', `${tracks[i].name}, шаг ${c + 1}`)
      b.addEventListener('click', () => {
        const pat = state.scenes[state.scene][i]
        pat.on[c] = !pat.on[c]
        if (state.selected !== i) select(i)
        refreshSteps()
      })
      return b
    })
    view.rings.push({ ring, steps, now: -1 })
  })

  const wires = svgEl('svg', { class: 'Wires A', viewBox: '0 0 1440 900', 'aria-hidden': 'true' }, deck)
  place(wires, 0, 0, 1440, 900)
  radii.forEach((r, i) => {
    const a = (pinAngle * Math.PI) / 180
    const px = center[0] + (r - 20) * Math.cos(a)
    const py = center[1] + (r - 20) * Math.sin(a)
    const sx = 30 + 16 + 318
    const sy = 62 + 314 + i * 45 + 19
    view.wires.push(svgEl('path', { class: 'Wire', d: `M${sx} ${sy}C${sx + 40} ${sy} ${px - 40} ${py} ${px} ${py}` }, wires))
    svgEl('circle', { class: 'Wire__pin', cx: px, cy: py, r: 4.5 }, wires)
  })
  refreshers.push(() => {
    view.wires.forEach((w, i) => w.classList.toggle('is-active', i === state.selected))
    view.rings.forEach((r, i) => r.ring.classList.toggle('is-active', i === state.selected))
  })

  const play = place(el('button', 'Play', deck), center[0] - 46, center[1] - 46, 92, 92)
  play.type = 'button'
  const playIcon = svgEl('svg', { viewBox: '0 0 44.51 44.51', 'aria-hidden': 'true' }, play)
  const playPath = svgEl('path', {}, playIcon)
  play.addEventListener('click', togglePlay)
  refreshers.push(() => {
    play.setAttribute('aria-pressed', String(state.playing))
    play.setAttribute('aria-label', state.playing ? 'Пауза' : 'Играть')
    playPath.setAttribute('d', state.playing ? icons.pause : 'M37 19.5a3 3 0 0 1 0 5.2L12.5 38.8A3 3 0 0 1 8 36.2V8.3a3 3 0 0 1 4.5-2.6Z')
    playPath.setAttribute('class', state.playing ? 'Play__pause' : 'Play__tri')
  })

  const bpm = place(el('div', 'Bpm', deck), center[0] - 50, center[1] + 40, 100, 26)
  bpm.tabIndex = 0
  bpm.setAttribute('role', 'slider')
  bpm.setAttribute('aria-label', 'Темп')
  const bpmText = label(bpm, '', 50, 13, 18, 'center')
  draggable(
    bpm,
    () => toNorm('bpm', state.bpm),
    (n) => {
      state.bpm = fromNorm('bpm', n)
      applyGlobal('bpm')
      refreshAll()
    },
    1 / 120
  )
  refreshers.push(() => {
    bpmText.textContent = `${state.bpm} bpm`
    bpm.setAttribute('aria-valuenow', state.bpm)
  })

  planets.forEach((pl, k) => {
    const b = place(el('button', 'Planet', deck), pl.x - 32, pl.y - 32, 64, 64)
    b.type = 'button'
    b.setAttribute('aria-label', `Сцена ${k + 1}: ${pl.name}`)
    label(deck, pl.name, pl.x, pl.y + 48, 20, 'center', 'Planet__name')
    b.addEventListener('click', () => goScene(k))
    view.planets.push(b)
  })
  refreshers.push(() =>
    view.planets.forEach((b, k) => {
      b.setAttribute('aria-pressed', String(state.scene === k))
      b.classList.toggle('is-queued', state.queued === k)
    })
  )

  liveButtons.forEach((lb, i) => {
    const b = place(el('button', 'Live', deck), 612 + i * 60, 808, 36, 36)
    b.type = 'button'
    b.title = lb.title
    b.setAttribute('aria-label', lb.title)
    icon(b, lb.icon, 36, 36, '0 0 36 36')
    view.live[lb.key] = b
  })
  const hold = view.live.hold
  hold.addEventListener('pointerdown', () => {
    state.hold = state.pos
    hold.setAttribute('aria-pressed', 'true')
  })
  ;['pointerup', 'pointerleave', 'pointercancel'].forEach((type) =>
    hold.addEventListener(type, () => {
      state.hold = null
      hold.setAttribute('aria-pressed', 'false')
    })
  )
  view.live.auto.addEventListener('click', () => {
    state.auto = !state.auto
    refreshAll()
  })
  refreshers.push(() => view.live.auto.setAttribute('aria-pressed', String(state.auto)))
  view.live.rewind.addEventListener('click', () => {
    state.pos = 0
    drawTick(0, [])
  })
  view.live.zib.addEventListener('click', async () => {
    await startAudio()
    playVoice()
  })
}

function refreshSteps() {
  view.rings.forEach(({ steps }, i) => {
    const pat = state.scenes[state.scene][i]
    steps.forEach((b, c) => {
      b.classList.toggle('is-on', pat.on[c])
      b.classList.toggle('is-out', c >= state.lengths[i])
      b.setAttribute('aria-pressed', String(pat.on[c]))
    })
  })
}

function goScene(k) {
  if (state.playing) state.queued = state.queued === k ? null : k
  else state.scene = k
  refreshSteps()
  refreshAll()
}

async function togglePlay() {
  await startAudio()
  state.playing = !state.playing
  if (state.playing) state.pos = 0
  refreshAll()
}

function drawTick(pos, played) {
  const step = pos % 16
  view.sweep.style.setProperty('--a', `${step * 22.5 + 11.25}deg`)
  view.rings.forEach((r, i) => {
    const s = pos % state.lengths[i]
    if (r.now >= 0) r.steps[r.now].classList.remove('is-now')
    r.steps[s].classList.add('is-now')
    r.now = s
    r.ring.classList.toggle('is-hit', played.includes(i))
  })
  played.forEach((i) => pulse(tracks[i].space))
  if (step === 0) {
    refreshSteps()
    refreshAll()
  }
}

function pulse(amount) {
  if (amount <= 0.02) return
  view.pulses.push({ r: 14, a: Math.min(1, amount * 1.4) })
  view.flash = Math.min(1, view.flash + amount)
  if (view.pulses.length > 24) view.pulses.shift()
}

const reflections = Array.from({ length: 26 }, (_, i) => {
  const r = 26 + ((i * 47) % 120)
  const a = ((200 + ((i * 83) % 140)) * Math.PI) / 180
  return [159 + r * Math.cos(a), 124 + r * Math.sin(a), 1 + ((i * 7) % 5) / 4, 0.85 - r / 170]
})

let lastFrame = 0

function drawReverb(dt) {
  const c = view.canvas
  const w = c.clientWidth
  const h = c.clientHeight
  if (!w) return
  const dpr = devicePixelRatio || 1
  if (c.width !== Math.round(w * dpr)) {
    c.width = Math.round(w * dpr)
    c.height = Math.round(h * dpr)
  }
  const ctx = c.getContext('2d')
  ctx.setTransform((w * dpr) / 318, 0, 0, (h * dpr) / 112, 0, 0)
  ctx.clearRect(0, 0, 318, 112)
  const nD = toNorm('rvDecay', state.rvDecay)
  const nS = toNorm('rvSpace', state.rvSpace)
  const nT = toNorm('rvTone', state.rvTone)
  const mix = state.rvMix
  const count = 4 + Math.round(nD * 6)
  const gap = 11 + nS * 9
  const tint = (a) => `rgba(${Math.round(150 + 105 * nT)},${Math.round(165 + 90 * nT)},${Math.round(110 + 145 * nT)},${a})`
  ctx.lineCap = 'round'
  ctx.shadowColor = 'rgba(84,98,46,0.95)'
  ctx.shadowBlur = 10
  for (let i = 0; i < count; i++) {
    const r = 20 + i * gap
    ctx.strokeStyle = tint((1 - i / count) * (0.3 + 0.7 * mix))
    ctx.lineWidth = Math.max(0.8, 2.4 - i * 0.16)
    ctx.beginPath()
    ctx.arc(159, 124, r, (190 * Math.PI) / 180, (350 * Math.PI) / 180)
    ctx.stroke()
  }
  view.pulses = view.pulses.filter((p) => {
    p.r += dt * (70 + nS * 90)
    p.a *= Math.pow(0.5, dt / (0.25 + nD * 1.6))
    if (p.a < 0.02 || p.r > 220) return false
    ctx.strokeStyle = `rgba(255,255,255,${(p.a * (0.4 + 0.6 * mix)).toFixed(3)})`
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.arc(159, 124, p.r, Math.PI, Math.PI * 2)
    ctx.stroke()
    return true
  })
  ctx.shadowBlur = 0
  reflections.forEach(([x, y, r, a]) => {
    ctx.fillStyle = `rgba(255,255,255,${Math.max(0, a * (0.3 + 0.7 * mix) * (0.6 + view.flash * 0.6)).toFixed(3)})`
    ctx.beginPath()
    ctx.arc(x, y, r, 0, Math.PI * 2)
    ctx.fill()
  })
  for (let i = 0; i < 7; i++) {
    const bh = Math.exp(-i / (0.8 + nD * 5)) * 30
    ctx.fillStyle = `rgba(255,255,255,${(0.25 + (bh / 30) * 0.6).toFixed(3)})`
    ctx.fillRect(262 + i * 7, 96 - bh, 4, bh)
  }
  ctx.shadowColor = 'rgba(255,255,255,0.9)'
  ctx.shadowBlur = 12 + view.flash * 14
  ctx.fillStyle = '#fff'
  ctx.beginPath()
  ctx.arc(159, 104, 7 + view.flash * 3, 0, Math.PI * 2)
  ctx.fill()
  ctx.shadowBlur = 0
  view.flash *= Math.pow(0.5, dt / 0.15)
}

function drawMeters() {
  if (!audio) return
  view.rows.forEach((r, i) => {
    const db = audio.tracks[i].meter.getValue()
    const lit = clamp(Math.round(((db + 48) / 42) * 7), 0, 7)
    if (lit === r.lit) return
    r.lit = lit
    r.bars.forEach((b, k) => b.classList.toggle('is-lit', k < lit))
  })
  const lr = audio.meter.getValue()
  const levels = Array.isArray(lr) ? lr : [lr, lr]
  view.out.forEach((o, k) => {
    const lit = clamp(Math.round(((levels[k] + 54) / 54) * 32), 0, 32)
    o.peak = lit >= o.peak ? lit : Math.max(lit, o.peak - 0.15)
    const peak = Math.round(o.peak)
    if (lit === o.lit && peak === o.peakShown) return
    o.lit = lit
    o.peakShown = peak
    o.cells.forEach((c, s) => {
      c.classList.toggle('is-lit', s < lit)
      c.classList.toggle('is-peak', s === peak - 1 && peak > lit)
    })
  })
  const m = clamp((Math.max(...levels) + 48) / 48)
  view.vu.forEach((v, i) => v.style.setProperty('--v', clamp(0.25 + m * [0.6, 0.85, 1, 0.7][i] + (Math.random() - 0.5) * m * 0.2)))
}

function frame(t) {
  const dt = Math.min(0.1, (t - lastFrame) / 1000)
  lastFrame = t
  if (view.visible) {
    drawReverb(dt)
    drawMeters()
  }
  requestAnimationFrame(frame)
}

function initDeck(deck) {
  buildOrbits(deck)
  buildLeft(deck)
  buildRight(deck)
  refreshSteps()
  refreshAll()
  drawTick(0, [])
  requestAnimationFrame(frame)
  addEventListener('keydown', (e) => {
    if (!view.visible || e.target !== document.body) return
    if (e.key === ' ') {
      e.preventDefault()
      togglePlay()
    } else if (['1', '2', '3', '4'].includes(e.key)) goScene(Number(e.key) - 1)
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
    const on = await toggleAlien()
    stage.classList.toggle('is-alien-off', !on)
    play.setAttribute('aria-pressed', String(on))
    play.setAttribute('aria-label', on ? 'Выключить пришельца' : 'Включить пришельца')
  })

  $('#alienHint').addEventListener('click', () => scrollTo({ top: innerHeight, behavior: reduceMotion ? 'auto' : 'smooth' }))

  let ticking = false
  const update = () => {
    ticking = false
    const p = Math.min(1, Math.max(0, scrollY / innerHeight))
    synths.style.setProperty('--p', p.toFixed(4))
    view.visible = p > 0.01
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
    startDeck()
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
  initDeck(document.getElementById('deck'))
  initScreens()
})
