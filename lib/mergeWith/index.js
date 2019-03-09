import _curry2 from '../_internal/_curry2'
import _merge from '../_internal/_merge'

export default _curry2(function mergeWith(cb, result) {
  var rightIndex = 2
  while (rightIndex < arguments.length) {
    result = _merge(result, arguments[rightIndex++], cb)
  }
  return result
})
