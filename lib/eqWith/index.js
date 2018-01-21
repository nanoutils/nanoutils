import curryN from '../curryN'

export default curryN(3, function eqWith(cb, a, b) {
  return cb(a, b)
})
