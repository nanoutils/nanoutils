import _curry3 from '../_internal/_curry3'
import _merge from '../_internal/_merge'

const mergeDeepWith = (func, left, right) =>
  _merge(left, right, (l, r) =>
    typeof l === 'object' && typeof r === 'object' && !Array.isArray(l)
      ? mergeDeepWith(func, l, r)
      : func(l, r),
  )

export default _curry3(mergeDeepWith)
