import curry2 from '../_internal/_curry2'

export default curry2(function lastIndexOf(val, obj) {
  return obj != null &&
    typeof obj.lastIndexOf === 'function'
    ? obj.lastIndexOf(val)
    : -1
})
