import curry3 from '../_internal/_curry3'
import equals from '../equals/equals'

export default curry3(function eqLens(lens, val, obj) {
  return equals(lens(obj).get(), val)
})
