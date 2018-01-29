import curryN from '../curryN'

export default curryN(3, function mapAccum(cb, init, arr) {
  return arr.reduce(
    function(tuple, cur) {
      var res = cb(tuple[0], cur)
      return [res[0], tuple[1].concat([res[1]])]
    },
    [init, []]
  )
})
