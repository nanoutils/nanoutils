import _curry2 from '../_internal/_curry2'

export default _curry2(function find(fn, list) {
  var i = 0
  while (i < list.length) {
    if (fn(list[i])) return list[i]
    i += 1
  }
})
