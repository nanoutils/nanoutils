import curry2 from '../_internal/_curry2'

export default curry2(function forEachObjIndexed(fn, object) {
  for (var key in object) {
    if (object.hasOwnProperty(key)) {
      fn(object[key], key, object)
    }
  }
  return object
})
