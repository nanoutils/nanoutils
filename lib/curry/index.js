import curryN from '../curryN/curryN'

export default function curry(fn) {
  return curryN(fn.nanoLen || fn.length, fn)
}
