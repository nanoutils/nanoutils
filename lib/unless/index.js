import curryN from '../curryN'

export default curryN(2, function(cond, cb) {
  return function(d) {
    return cond(d) ? d : cb(d)
  }
})
