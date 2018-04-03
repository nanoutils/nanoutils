import _curry2 from '../_internal/_curry2'

export default _curry2(function none(fn, list) {
  for (var i = 0; i < list.length; i++) {
    if (fn(list[i])) return false
  }
  return true
})
