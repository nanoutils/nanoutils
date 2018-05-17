import _curry2 from '../_internal/_curry2'

export default _curry2(function forEachObjIndexed(fn, obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      fn(obj[key], key, obj)
    }
  }
  return obj
})
