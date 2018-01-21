import curryN from '../curryN'
import toArray from '../toArray'

export default curryN(2, function any(cb, data) {
  return toArray(data).some(function(val) {
    return cb(val)
  })
})
