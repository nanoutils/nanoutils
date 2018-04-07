import _curry2 from '../_internal/_curry2'

export default _curry2(function props(ps, object) {
  if (!Array.isArray(ps)) return []
  var length = ps.length
  var result = Array(length)
  for (var i = 0; i < length; i++) {
    result[i] = object[ps[i]]
  }
  return result
})
