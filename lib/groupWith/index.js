import curry2 from '../_internal/_curry2'

export default curry2(function groupWith(func, list) {
  if (list.length === 0 || !Array.isArray(list)) return []
  var result = [[list[0]]]
  var sublistIdx = 0
  for (var i = 1; i < list.length; i++) {
    if (func(list[i - 1], list[i])) {
      result[sublistIdx].push(list[i])
      continue
    }
    result[++sublistIdx] = [list[i]]
  }
  return result
})
