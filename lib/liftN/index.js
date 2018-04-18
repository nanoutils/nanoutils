import curryN from '../curryN'
import _curry2 from '../_internal/_curry2'
import { lift } from '../lift/lift'

export default _curry2(function liftN(n, fn) {
  return curryN(n, lift.bind(lift, fn))
})
