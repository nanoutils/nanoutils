import curry2 from '../_internal/_curry2'

export default curry2(function anyPass(callbacks, value) {
  var index = 0
  var length = callbacks.length
  while (index < length && !callbacks[index](value)) {
    index += 1
  }
  return index < length
})
