import curry3 from '../_internal/_curry3'
import _merge from '../_internal/_merge'

export default curry3(function mergeWith(cb) {
  var rightIndex = 2
  var mergedResult = arguments[1]
  while (rightIndex < arguments.length) {
    mergedResult = _merge(mergedResult, arguments[rightIndex++], cb)
  }
  return mergedResult
})
