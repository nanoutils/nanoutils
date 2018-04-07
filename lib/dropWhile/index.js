import curry2 from '../_internal/_curry2'

export default curry2(function dropWhile(cb, arr) {
  if (arr.length) {
    var len = 0
    while (cb(arr[len])) {
      len++
    }
    return arr.slice(len)
  }
  return []
})
