import _curry2 from '../_internal/_curry2'
import equals from '../equals/equals'
import differenceWith from '../differenceWith/differenceWith'

export default _curry2(function(a, b) {
  return differenceWith(equals, a, b)
})
