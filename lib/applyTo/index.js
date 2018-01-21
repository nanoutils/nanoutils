import curryN from '../curryN'

export default curryN(2, function applyTo(value, cb) {
  return cb(value)
})
