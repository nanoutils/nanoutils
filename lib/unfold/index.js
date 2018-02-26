import _curry2 from '../_internal/_curry2'

export default _curry2(function unfold(fn, value) {
  var result = fn(value)
  return result
    ? [result[0]].concat(unfold(fn, result[1]))
    : []
})
