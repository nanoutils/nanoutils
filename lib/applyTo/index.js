import curry from '../curry'

export default curry(function applyTo(value, cb) {
  return cb(value)
})
