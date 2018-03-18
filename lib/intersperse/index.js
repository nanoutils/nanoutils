import _curry2 from '../_internal/_curry2'

export default _curry2(function intersperse(separator, list) {
  var result = []
  for (var i = 0; i < list.length - 1; i++) {
    result.push(list[i], separator)
  }
  result.push(list[i])
  return result
})
