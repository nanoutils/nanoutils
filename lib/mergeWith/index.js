import curry3 from '../_internal/_curry3'

export default curry3(function mergeWith(cb, a, b) {
  return Object.keys(b).reduce(
    function(res, key) {
      res[key] = key in a ? cb(a[key], b[key]) : b[key]
      return res
    },
    Object.keys(a).reduce(function(res, key) {
      res[key] = a[key]
      return res
    }, {})
  )
})
