import curry from '../curry'
import toArray from '../toArray'

export default curry(function dropRightWhile(cb, arr) {
  var len = 0
  while (arr.length && cb(arr[arr.length - len - 1])) {
    len++
  }
  return toArray(arr).slice(0, -len)
})
