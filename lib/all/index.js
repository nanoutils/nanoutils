import curry from '../curry'
import toArray from '../toArray'

export default curry(function all(cb, data) {
  return toArray(data).every(function(val) {
    return cb(val)
  })
})
