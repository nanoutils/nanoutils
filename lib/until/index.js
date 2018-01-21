import curryN from '../curryN'

export default curryN(3, function until(cond, cb, val) {
  return cond(val) ? until(cond, cb, cb(val)) : val
})
