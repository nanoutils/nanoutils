import curry2 from '../_internal/_curry2'

export default curry2(function xprod(a, b) {
  const res = []
  var ia = 0
  var ib
  while (ia < a.length) {
    ib = 0
    while (ib < b.length) {
      res.push([a[ia], b[ib]])
      ib += 1
    }
    ia += 1
  }
  return res
})
