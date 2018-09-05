import curryN from '../curryN/curryN'

export default curryN(4, function reduceWhile(cond, cb, init, arr) {
  var res = init
  var i = 0
  while (i < arr.length && cond(res, arr[i])) {
    res = cb(res, arr[i++])
  }
  return res
})
