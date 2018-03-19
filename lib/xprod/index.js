import _curry2 from '../_internal/_curry2'

export default _curry2(function xprod(a, b) {
  const res = []
  for (var ia in a) {
    for (var ib in b) {
      res.push([a[ia], b[ib]])
    }
  }
  return res
})
