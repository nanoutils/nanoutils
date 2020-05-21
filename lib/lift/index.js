import curryN from '../curryN/curryN'
import { lift as _lift } from './lift'

export default (fn) => curryN(fn.nul || fn.length, _lift.bind(_lift, fn))
