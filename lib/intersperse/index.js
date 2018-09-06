import curry2 from '../_internal/_curry2'

export default curry2(function intersperse(separator, list) {
  var result = new Array(2 * list.length - 1)
  for (var i = 0; i < list.length - 1; i++) {
    result[2 * i] = list[i]
    result[2 * i + 1] = separator
  }
  result[2 * i] = list[i]
  return result
})
