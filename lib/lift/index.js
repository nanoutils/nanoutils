import curryN from '../curryN/curryN'
import { lift as _lift } from './lift'

export default function lift(fn) {
  return curryN(fn.nanoLen || fn.length, _lift.bind(lift, fn))
}
