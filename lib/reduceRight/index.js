import curryN from '../curryN'
import toArray from '../toArray'

export default curryN(3, function reduceRight(cb, initial, arr) {
  return arr === null || arr === undefined
    ? initial
    : toArray(arr).reduceRight(cb, initial)
})
