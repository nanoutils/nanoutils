import _curry2 from '../_internal/_curry2'
import prop from '../prop'

export default _curry2(function props(ps, object) {
  if (!Array.isArray(ps)) throw new TypeError('Properties should be an array')
  var length = ps.length
  var result = Array(length)
  for (var i = 0; i < length; i++) {
    result[i] = prop(ps[i], object)
  }
  return result
})
