import _curry2 from '../_internal/_curry2'

export default _curry2(function find(fn, list) {
  for (var i = 0; i < list.length; i++) {
    if (fn(list[i])) return list[i]
  }
  return undefined
})
