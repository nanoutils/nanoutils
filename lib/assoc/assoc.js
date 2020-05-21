import shallowCloneObjectAndArrays from '../_internal/_shallow_clone'

export default (path, val, obj) => {
  var res = shallowCloneObjectAndArrays(obj)
  if (typeof path === 'number' && !Array.isArray(res)) {
    res = []
  }
  res[path] = val
  return res
}
