import curry3 from '../_internal/_curry3'
import _merge from '../_internal/_merge'

export default curry3(function mergeWith(cb, result) {
  var rightIndex = 2
  while (rightIndex < arguments.length) {
    result = _merge(result, arguments[rightIndex++], cb)
  }
  return result
})
