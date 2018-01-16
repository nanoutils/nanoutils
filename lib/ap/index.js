export default function ap(cbs, vals) {
  return cbs.reduce(function(res, cb) {
    for (var i in vals) {
      res.push(cb(vals[i]))
    }
    return res
  }, [])
}
