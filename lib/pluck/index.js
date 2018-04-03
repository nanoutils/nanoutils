import _curry2 from '../_internal/_curry2'

import prop from '../prop'

export default _curry2(function pluck(keys, array) {
  if (Array.isArray(keys)) return array.map(prop(keys))
  throw new TypeError('Keys should be an array')
})
