import _curry2 from '../_internal/_curry2'

export default _curry2(function splitWhen(cb, arr) {
  var left = []
  while (left.length < arr.length) {
    if (cb(arr[left.length])) break
    left.push(arr[left.length])
  }
  return [left, arr.slice(left.length)]
})
