import curryN from '../curryN'
import toArray from '../toArray'

export default curryN(2, function all(cb, data) {
  return toArray(data).every(function(val) {
    return cb(val)
  })
})
