import _curry2 from '../_internal/_curry2'

export default _curry2(function findLastIndex(fn, list) {
  var reversed = list.reverse()
  for (var i = 0; i < reversed.length; i++) {
    if (fn(reversed[i])) return Math.abs(i - reversed.length + 1)
  }
  return -1
})
