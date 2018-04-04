import _curry2 from '../_internal/_curry2'
import prop from '../prop'

export default _curry2(function props(path, object) {
  if (!Array.isArray(path)) throw new TypeError('Path should be an array')
  return path.map(function(key) {
    return prop(key, object)
  })
})
