import curry3 from '../_internal/_curry3'
import equals from '../equals/equals'

export default curry3(function eqProps(prop, obj1, obj2) {
  return equals(obj1[prop], obj2[prop])
})
