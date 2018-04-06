import curryN from '../curryN/curryN'

export default curryN(4, function reduceWhile(cond, cb, init, arr) {
  var res = init
  var copy = [].concat(arr)
  while (copy.length && cond(res, copy[0])) res = cb(res, copy.shift())
  return res
})
