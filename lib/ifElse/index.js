import curryN from '../curryN'

export default curryN(3, function ifElse(cond, a, b) {
  return function(d) {
    return cond(d) ? a(d) : b(d)
  }
})
