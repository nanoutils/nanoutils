import curry3 from '../_internal/_curry3'
import equals from '../equals/equals'

export default curry3(function eqProps(key, first, second) {
  return equals(first[key], second[key])
})
