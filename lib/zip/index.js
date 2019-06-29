import curry2 from '../_internal/_curry2'
import zipWith from '../zipWith/zipWith'

export default curry2(function(arr1, arr2) {
  return zipWith((a, b) => [a, b], arr1, arr2)
})
