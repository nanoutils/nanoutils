import curry2 from '../_internal/_curry2'

export default curry2(function applyTo(value, cb) {
  return cb(value)
})
