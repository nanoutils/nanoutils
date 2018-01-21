import curryN from '../curryN'

export default curryN(2, function and(a, b) {
  return a && b
})
