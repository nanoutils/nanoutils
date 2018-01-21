import curryN from '../curryN'

export default curryN(2, function allPass(cbs, data) {
  return cbs.every(function(cb) {
    return cb(data)
  })
})
