import _curry3 from '../_internal/_curry3'

export default _curry3(function propOr(def, key, obj) {
  return obj.hasOwnProperty(key)
    ? obj[key]
    : def
})
