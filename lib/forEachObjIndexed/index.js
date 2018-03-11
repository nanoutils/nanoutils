import _curry2 from '../_internal/_curry2'

export default _curry2(function forEachObjIndexed(fn, obj) {
  var keys = Object.keys(obj)
  for (var i = 0; i < keys.length; i++) {
    fn(obj[keys[i]], keys[i], obj)
  }
  return obj
})
