import curry2 from '../_internal/_curry2'

export default curry2(function unfold(fn, value) {
  var result = fn(value)
  return result
    ? [result[0]].concat(unfold(fn, result[1]))
    : []
})
