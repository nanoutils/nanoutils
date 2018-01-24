import eq from '../equals'
import curryN from '../curryN'

export default curryN(3, function eqLens (lens, val, obj) {
  return eq(lens(obj).get(), val)
})
