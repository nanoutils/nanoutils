import _curry2 from '../_internal/_curry2'

export default _curry2(function path(arr, obj) {
  return arr.length > 1 && obj[arr[0]] !== undefined
    ? path(arr.slice(1), obj[arr[0]])
    : obj[arr[0]]
})
