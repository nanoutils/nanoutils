import curry2 from '../_internal/_curry2'
import equals from '../equals/equals'

export default curry2((spec, obj) => {
  for (var key in spec) {
    if (!obj.hasOwnProperty(key) || !equals(spec[key], obj[key])) return false
  }
  return true
})
