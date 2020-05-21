import curry3 from '../_internal/_curry3'
import _merge from '../_internal/_merge'

export default curry3((cb, result, ...args) => {
  var rightIndex = 0
  while (rightIndex < args.length) {
    result = _merge(result, args[rightIndex++], cb)
  }
  return result
})
