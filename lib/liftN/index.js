import curryN from '../curryN/curryN'
import { lift } from '../lift/lift'

export default curryN(2, function liftN(n, fn) {
  return curryN(n, lift.bind(lift, fn))
})
