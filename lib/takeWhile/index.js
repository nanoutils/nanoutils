import _curry2 from '../_internal/_curry2'

export default _curry2(function takeWhile(cb, arr) {
  if (arr.length) {
    var len = 0
    while (cb(arr[len])) {
      len++
    }
    return arr.slice(0, len)
  }
  return []
})
