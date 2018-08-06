import curry2 from '../_internal/_curry2'

export default curry2(function dropLastWhile(cb, arr) {
  if (!arr.length) {
    return []
  }

  var len = 0
  while (cb(arr[arr.length - len - 1])) {
    len++
  }
  return arr.slice(0, -len)
})
