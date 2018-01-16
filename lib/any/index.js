import curry from '../curry'
import toArray from '../toArray'

export default curry(function any(cb, data) {
  return toArray(data).some(function(val) {
    return cb(val)
  })
})
