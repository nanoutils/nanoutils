import _curry3 from '../_internal/_curry3'
import _set from '../_internal/_set'

export default _curry3(function unionWith(func, arr1, arr2) {
  var set = _set(arr1)
  return arr1
    .concat(arr2.filter(function (element) {
      return !set.has(element)
    }))
})
