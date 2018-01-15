import curry from '../curry'
import toArray from '../toArray'

export default curry(function reduce(cb, initial, arr) {
  return arr === null || arr === undefined
    ? initial
    : toArray(arr).reduce(cb, initial)
})
