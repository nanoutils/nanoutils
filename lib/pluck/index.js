import _curry2 from '../_internal/_curry2'

import prop from '../prop'

export default _curry2(function pluck(property, array) {
  return array.map(prop(property))
})
