import curry2 from '../_internal/_curry2'
import toArray from '../toArray'

export default curry2(function dropWhile(cb, arr) {
  var len = 0
  while (arr.length && cb(arr[len])) {
    len++
  }
  return toArray(arr).slice(len)
})
