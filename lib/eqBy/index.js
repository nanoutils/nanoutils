import curry3 from '../_internal/_curry3'
import eq from '../equals'

export default curry3(function eqBy (cb, a, b) {
  return eq(cb(a), cb(b))
})
