import curryN from '../curryN'
import toArray from '../toArray'

export default curryN(2, function dropRightWhile(cb, arr) {
  var len = 0
  while (arr.length && cb(arr[arr.length - len - 1])) {
    len++
  }
  return toArray(arr).slice(0, -len)
})
