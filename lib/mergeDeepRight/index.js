import _curry2 from '../_internal/_curry2'
import mergeDeepLeft from '../mergeDeepLeft'

export default _curry2(function mergeDeepRight(first, second) {
  return mergeDeepLeft(second, first)
})
