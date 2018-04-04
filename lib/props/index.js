import _curry2 from '../_internal/_curry2'
import prop from '../prop'

export default _curry2(function props(ps, object) {
  if (!Array.isArray(ps)) throw new TypeError('Properties should be an array')
  return ps.map(function(p) {
    return prop(p, object)
  })
})
