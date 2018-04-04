import _curry2 from '../_internal/_curry2'

import prop from '../prop'

export default _curry2(function pluck(path, array) {
  if (Array.isArray(path)) return array.map(prop(path))
  throw new TypeError('Path should be an array')
})
