// Texts are copied from the Figma layout. Sound presets (notes, envelopes) are not in the layout,
// they live here so they can be changed without touching the logic.

export const marquee = 'Zap Zup, ZipZidi! '

// Desktop 7: highlighted words are [green] in the layout (#55632e)
export const hello = [
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

// Zib-Zib's beeps: a 6 second recording, looped forward and backward (see audio.js)
export const alienVoice = { url: 'sounds/zibzib.mp3', volume: -3, reverb: 0.12 }
export const loopBars = 6 // forward + backward pass = 6 bars, the tempo follows from it

// Desktop 22: "Zib-Zib language" pop-up. [earth word, alien word]; left column then right column
export const dictionary = {
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

// Synth1, Synth2, Synth3 from Desktop 16. Controls: Volume, Filter, the synth's own effect knob, Type.
// The third knob is different for every synth:
//   Shine (Synth1)   FM index of the bell: clean glass -> metallic alien ring
//   Space (Synth2)   reverb + echo of the pad: dry and close -> endless space
//   Squelch (Synth3) resonance of the bass filter: soft and round -> quacking acid
export const effectTitles = { shine: 'Shine', space: 'Space', squelch: 'Squelch' }

export const waveTypes = ['square', 'sawtooth', 'triangle', 'sine']

export const controls = {
  volume: { min: -40, max: 0, step: 1 },
  filter: { min: 100, max: 8000, step: 1 },
  shine: { min: 0, max: 15, step: 0.1 },
  space: { min: 0, max: 1, step: 0.01 },
  squelch: { min: 0.5, max: 12, step: 0.1 }
}

// Three soft space voices in C minor, the key of the Zib-Zib beeps. One loop = 6 bars, like the beeps:
//   | Cm9 | Cm9 | Abmaj9 | Abmaj9 | Fm9 | Gsus G7 |
//   Synth1: star drops, a glassy bell that plays "pik-pik" arpeggios and echoes left and right
//   Synth2: space pad, slow warm chords that float under everything
//   Synth3: soft round bass that keeps the pulse
// kind is a Tone.js instrument, fx is the effect chain after the Filter slider,
// gain (dB) evens out how loud the instruments are, so every Volume slider starts from a fair level.

const bars = [
  { arp: ['C5', 'Eb5', 'G5', 'Bb5', 'D6'], root: 'C3', fifth: 'G3' },
  { arp: ['C5', 'Eb5', 'G5', 'Bb5', 'D6'], root: 'C3', fifth: 'G3' },
  { arp: ['Eb5', 'G5', 'Ab5', 'C6', 'Eb6'], root: 'Ab2', fifth: 'Eb3' },
  { arp: ['Eb5', 'G5', 'Ab5', 'Bb5', 'C6'], root: 'Ab2', fifth: 'Eb3' },
  { arp: ['F5', 'Ab5', 'C6', 'Eb6', 'G6'], root: 'F2', fifth: 'C3' },
  { arp: ['D5', 'G5', 'B5', 'D6', 'F6'], root: 'G2', fifth: 'D3' }
]

// each bar: eight soft "pik" notes going up and down the chord
const arpOrder = [0, 2, 4, 3, 1, 3, 2, 4]
const arpSteps = bars.flatMap((bar, b) =>
  arpOrder.map((n, i) => ({
    time: `${b}:${Math.floor(i / 2)}:${(i % 2) * 2}`,
    noteName: bar.arp[n],
    duration: '16n',
    velocity: i % 2 ? 0.7 : 1
  }))
)

// bass: root on the one, a quiet fifth after it, root again on the three
const bassSteps = bars.flatMap((bar, b) => [
  { time: `${b}:0:0`, noteName: bar.root, duration: '4n.', velocity: 0.9 },
  { time: `${b}:1:2`, noteName: bar.fifth, duration: '8n', velocity: 0.5 },
  { time: `${b}:2:0`, noteName: bar.root, duration: '4n', velocity: 0.75 },
  { time: `${b}:3:2`, noteName: bar.fifth, duration: '8n', velocity: 0.45 }
])

export const synths = [
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
      modulationIndex: 3.5, // the Shine knob
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

export const alienDelay = 1500 // ms before Zib-Zib appears on the alien screen
export const ringStep = 300 // ms between the rings on the first screen
export const stepRow = 24.52 // distance between two rows of steps in the layout
export const stepLap = 14 // seconds for the step pattern to fall by one full period
