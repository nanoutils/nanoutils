import curry2 from '../_internal/_curry2'

export default curry2(function indexOf(val, obj) {
  return obj != null && obj.indexOf
    ? obj.indexOf(val)
    : -1
})
