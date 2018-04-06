import _curry2 from '../_internal/_curry2'

export default _curry2(function path(arr, obj) {
  var value = obj
  for (var i = 0; i < arr.length; i++) {
    value = value[arr[i]]
  }
  return value
})
