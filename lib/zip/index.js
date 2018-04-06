import _curry2 from '../_internal/_curry2'
import zipWith from '../zipWith/zipWith'

export default _curry2(function(arr1, arr2) {
  return zipWith(function(a, b) {
    return [a, b]
  }, arr1, arr2)
})
