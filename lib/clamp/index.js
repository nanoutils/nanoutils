import curryN from '../curryN'

export default curryN(3, function clamp(min, max, val) {
  return val < min ? min : val > max ? max : val
})
