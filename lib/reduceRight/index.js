import curry3 from '../_internal/_curry3'
import toArray from '../toArray'

export default curry3(function reduceRight(cb, initial, arr) {
  return arr == null
    ? initial
    : toArray(arr).reduceRight(cb, initial)
})
