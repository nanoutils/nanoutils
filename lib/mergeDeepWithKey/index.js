import _curry3 from '../_internal/_curry3'
import _merge from '../_internal/_merge'

export default _curry3(function mergeDeepWithKey(func, left, right) {
  var cb = function(l, r, key) {
    if (typeof l === 'object' && typeof r === 'object' && !Array.isArray(l)) return mergeDeepWithKey(func, l, r)
    return func(key, l, r)
  }
  return _merge(left, right, cb)
})
