export default function ap(cbs, vals) {
  var res = []
  var i = 0
  var k
  var clen = cbs.length
  var vlen = vals.length
  while (i < clen) {
    k = 0
    while (k < vlen) {
      res.push(cbs[i](vals[k]))
      k += 1
    }
    i += 1
  }
  return res
}
