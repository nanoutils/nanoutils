import curry2 from '../_internal/_curry2'

export default curry2(function dropRepeatsWith(fn, list) {
  var result = []
  for (var i = 0; i < list.length; i++) {
    if (fn(list[i - 1], list[i])) continue
    result.push(list[i])
  }
  return result
})
