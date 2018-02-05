import curry3 from '../_internal/_curry3'

export default curry3(function mapAccumRight(cb, init, arr) {
  return arr.reduceRight(
    function(tuple, cur) {
      var res = cb(cur, tuple[1])
      return [[res[0]].concat(tuple[0]), res[1]]
    },
    [[], init]
  )
})
