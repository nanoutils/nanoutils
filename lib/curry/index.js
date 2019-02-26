import curryN from '../curryN/curryN'

export default function curry(fn) {
  return curryN(fn.nul || fn.length, fn)
}
