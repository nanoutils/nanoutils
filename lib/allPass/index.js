import curry2 from '../_internal/_curry2'

export default curry2(function allPass(callbacks, value) {
  for (var i = 0; i < callbacks.length; i++) {
    if (!callbacks[i](value)) return false
  }
  return true
})
