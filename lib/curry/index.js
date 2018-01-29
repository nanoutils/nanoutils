import curryN from '../curryN'

export default function curry(fn) {
  return curryN(fn.nanoLen || fn.length, fn)
}
