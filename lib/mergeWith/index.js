import curry3 from '../_internal/_curry3'
import _merge from '../_internal/_merge'

export default curry3(function mergeWith(cb, left, right) {
  return _merge(left, right, cb)
})
