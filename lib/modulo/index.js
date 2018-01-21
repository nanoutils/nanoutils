import curryN from '../curryN'

export default curryN(2, function modulo(a, b) {
  return a % b
})
