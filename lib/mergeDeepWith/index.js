import _curry3 from '../_internal/_curry3'
import _merge from '../_internal/_merge'

export default _curry3(function mergeDeepWith(func, left, right) {
  return _merge(left, right, (l, r) => typeof l === 'object' && typeof r === 'object' && !Array.isArray(l)
    ? mergeDeepWith(func, l, r)
    : func(l, r)
  )
})
