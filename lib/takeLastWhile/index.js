import curry2 from '../_internal/_curry2'
import toArray from '../toArray'

export default curry2(function takeLastWhile (cb, arr) {
  var len = 0
  while (arr.length && cb(arr[arr.length - len - 1])) {
    len++
  }
  return toArray(arr).slice(-len)
})
