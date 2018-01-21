import curryN from '../curryN'

export default curryN(2, function lte(a, b) {
  return a <= b
})
