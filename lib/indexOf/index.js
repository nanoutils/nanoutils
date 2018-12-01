import curry2 from '../_internal/_curry2'

export default curry2(function indexOf(value, array) {
  return array != null && array.indexOf
    ? array.indexOf(value)
    : -1
})
