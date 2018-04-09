import _curry2 from '../_internal/_curry2'
import _set from '../_internal/_set'

export default _curry2(function union(arr1, arr2) {
  return _set(arr1).concat(arr2).values()
})
