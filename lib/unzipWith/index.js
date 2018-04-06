import _curry2 from '../_internal/_curry2'

export default _curry2(function unzipWith(cb, args) {
  var maxLen = args.reduce(function(max, cur) {
    return cur.length > max ? cur.length : max
  }, 0)
  return Array(maxLen).fill(0).map(function(v, i) {
    return cb.apply(
      cb,
      args.map(function(arg) {
        return arg[i]
      })
    )
  })
})
