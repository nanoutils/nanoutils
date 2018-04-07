import _curry3 from '../_internal/_curry3'
import equals from '../equals/equals'

export default _curry3(function propEq(key, value, obj) {
  return equals(obj[key], value)
})
