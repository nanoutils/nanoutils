import curry2 from '../_internal/_curry2'
import _merge from '../_internal/_merge'

export default curry2(function merge(left, right) {
  return _merge(left, right)
})
