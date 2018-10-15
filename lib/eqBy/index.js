import curry3 from '../_internal/_curry3'
import equals from '../equals/equals'

export default curry3(function eqBy(getter, first, second) {
  return equals(getter(first), getter(second))
})
