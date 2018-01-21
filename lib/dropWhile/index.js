import curryN from '../curryN'
import toArray from '../toArray'

export default curryN(2, function dropWhile(cb, arr) {
  var len = 0
  while (arr.length && cb(arr[len])) {
    len++
  }
  return toArray(arr).slice(len)
})
