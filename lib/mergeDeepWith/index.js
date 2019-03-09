import _curry3 from '../_internal/_curry3'
import _merge from '../_internal/_merge'

export default _curry3(function mergeDeepWith(func, left, right) {
  function mergeDeepWithStrategy(l, r) {
    if (typeof l === 'object' && typeof r === 'object') {
      if (!Array.isArray(l) && !Array.isArray(r)) {
        return mergeDeepWith(func, l, r)
      }
    }
    return func(l, r)
  }
  return _merge(left, right, mergeDeepWithStrategy)
})
