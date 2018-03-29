import _curry2 from '../_internal/_curry2'

export default _curry2(function where(spec, obj) {
  for (var key in spec) {
    if (!obj.hasOwnProperty(key) || !spec[key](obj[key])) return false
  }
  return true
})
