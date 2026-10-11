import { initSynths } from './synths.js'
import { initScreens } from './screens.js'

document.addEventListener('DOMContentLoaded', () => {
  initSynths(document.getElementById('synthGrid'))
  initScreens()
})
