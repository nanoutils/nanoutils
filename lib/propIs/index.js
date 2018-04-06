import _curry3 from '../_internal/_curry3'

export default _curry3(function propIs(type, key, obj) {
  return obj[key] != null && (obj[key].constructor === type || obj[key] instanceof type)
})
