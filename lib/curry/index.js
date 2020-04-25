import curryN from '../curryN/curryN'

export default (fn) => curryN(fn.nul || fn.length, fn)
