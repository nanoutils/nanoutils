import eq from '../eq'
import curry from '../curry'

export default curry(function eqBy(cb, a, b) {
  return eq(cb(a), cb(b))
})
