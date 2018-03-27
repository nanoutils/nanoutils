import _curry2 from '../_internal/_curry2'

export default _curry2(function findLast(fn, list) {
  var length = list.length
  for (var i = length - 1; i >= 0; i--) {
    if (fn(list[i])) return list[i]
  }
})
