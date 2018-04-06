import curryN from '../curryN/curryN'

export default curryN(4, function reduceWhile(cond, cb, init, arr) {
  var res = init
  var copy = [].concat(arr)
  while (copy.length && cond(copy[copy.length - 1], res)) {
    res = cb(copy.pop(), res)
  }
  return res
})
