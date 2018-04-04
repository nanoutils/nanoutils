import _curry2 from '../_internal/_curry2'

export default _curry2(function dropRepeatsWith(fn, list) {
  var result = []
  for (var i = 0; i < list.length; i++) {
    if (fn(result[result.length - 1], list[i])) continue
    result.push(list[i])
  }
  return result
})
