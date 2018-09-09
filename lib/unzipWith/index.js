import curry2 from '../_internal/_curry2'

export default curry2(function unzipWith(cb, args) {
  var res = []
  var i = 0
  var max = 0
  while (i < args.length) {
    if (max < args[i].length) {
      max = args[i].length
    }
    i++
  }
  var j = 0
  while (j < max) {
    var arr = Array(args.length)
    for (i = 0; i < args.length; i++) {
      arr[i] = args[i][j]
    }
    res.push(cb.apply(cb, arr))
    j++
  }
  return res
})
