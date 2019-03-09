import _curry3 from '../_internal/_curry3'
import _merge from '../_internal/_merge'

export default _curry3(function mergeWithKey(func, left, right) {
  function mergeWithKeyStrategy(l, r, k) {
    return func(k, l, r)
  }
  return _merge(left, right, mergeWithKeyStrategy)
})
