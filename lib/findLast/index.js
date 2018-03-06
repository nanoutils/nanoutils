import _curry2 from '../_internal/_curry2'

export default _curry2(function findLast(fn, list) {
  var reversed = list.reverse()
  for (var i = 0; i < reversed.length; i++) {
    if (fn(reversed[i])) return reversed[i]
  }
  return undefined
})
