import curry2 from '../_internal/_curry2'

export default curry2(function merge(a, b) {
  return Object.keys(b).reduce(
    function(res, key) {
      res[key] = b[key]
      return res
    },
    Object.keys(a).reduce(function(res, key) {
      res[key] = a[key]
      return res
    }, {})
  )
})
