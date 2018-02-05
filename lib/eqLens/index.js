import curry3 from '../_internal/_curry3'
import eq from '../equals'

export default curry3(function eqLens (lens, val, obj) {
  return eq(lens(obj).get(), val)
})
