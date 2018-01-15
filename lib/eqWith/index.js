import curry from '../curry'

export default curry(function eqWith(cb, a, b) {
  return cb(a, b)
})
