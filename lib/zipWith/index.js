import curry3 from '../_internal/_curry3'
import toArray from '../toArray'

export default curry3(function zipWith(cb, arr1, arr2) {
  if (arr1 && arr1.length > 0 && arr2 && arr2.length > 0) {
    return [cb(arr1[0], arr2[0])].concat(zipWith(cb, arr1.slice(1), arr2.slice(1)))
  }
  return [];
})
