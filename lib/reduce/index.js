import curryN from '../curryN'
import toArray from '../toArray'

export default curryN(3, function reduce(cb, initial, arr) {
  return arr === null || arr === undefined
    ? initial
    : toArray(arr).reduce(cb, initial)
})
