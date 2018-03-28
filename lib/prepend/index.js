import _curry2 from '../_internal/_curry2'

export default _curry2(function prepend(elem, list) {
  var length = list.length + 1
  var array = new Array(length)
  array[0] = elem
  for (var i = 1; i < length; i++) array[i] = list[i - 1]
  return array
})
