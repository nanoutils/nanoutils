import curryN from '../curryN/curryN'

export default curryN(4, (cond, cb, init, arr) => {
  var res = init
  var i = arr.length - 1
  while (i >= 0 && cond(arr[i], res)) {
    res = cb(arr[i--], res)
  }
  return res
})
