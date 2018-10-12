import curry2 from '../_internal/_curry2'
import equals from '../equals/equals'

export default curry2(function contains(value, array) {
  return array.some(function(item) {
    return equals(item, value)
  })
})
