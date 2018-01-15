import curry from '../curry'
import toArray from '../toArray'

export default curry(function reduceRight(cb, initial, arr) {
  return arr === null || arr === undefined
    ? initial
    : toArray(arr).reduceRight(cb, initial)
})
