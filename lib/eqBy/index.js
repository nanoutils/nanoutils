import eq from '../equals'
import curryN from '../curryN'

export default curryN(3, function eqBy (cb, a, b) {
  return eq(cb(a), cb(b))
})
