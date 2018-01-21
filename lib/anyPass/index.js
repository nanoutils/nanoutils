import curryN from '../curryN'

export default curryN(2, function anyPass(cbs, data) {
  return cbs.some(function(cb) {
    return cb(data)
  })
})
