import _curry3 from '../_internal/_curry3'
import _merge from '../_internal/_merge'

export default _curry3(function mergeDeepWithKey(func, left, right) {
  return _merge(left, right, (l, r, key) => typeof l === 'object' && typeof r === 'object' && !Array.isArray(l) && !Array.isArray(r)
    ? mergeDeepWithKey(func, l, r)
    : func(key, l, r)
  )
})
