import _curry2 from '../_internal/_curry2'

export default _curry2(function xprod(a, b) {
  return a.reduce(function(res, cur) {
    return res.concat(
      b.map(function(item) {
        return [cur, item]
      })
    )
  }, [])
})
