import _curry2 from '../_internal/_curry2'

export default _curry2(function findIndex(fn, list) {
  for (var i = 0; i < list.length; i++) {
    if (fn(list[i])) return i
  }
  return -1
})
