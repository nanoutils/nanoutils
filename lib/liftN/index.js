import curryN from '../curryN/curryN'
import { lift } from '../lift/lift'

export default curryN(2, (n, fn) => curryN(n, lift.bind(lift, fn)))
