import curry2 from '../_internal/_curry2'

export default curry2(function xprod(a, b) {
  var res = Array(a.length * b.length)
  var ia = 0
  var ib
  while (ia < a.length) {
    ib = 0
    while (ib < b.length) {
      res[ia * a.length + ib] = [a[ia], b[ib]]
      ib += 1
    }
    ia += 1
  }
  return res
})
