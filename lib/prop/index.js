import _curry2 from '../_internal/_curry2'

export default _curry2(function prop(path, obj) {
  if (!Array.isArray(path)) throw new TypeError('Path should be an array')
  return path.reduce(function(acc, property) {
    return acc[property]
  }, obj)
})
