import { shallowCloneObjectAndArrays } from '../_internal/_clone'

export default function assoc(path, val, obj) {
  var res = shallowCloneObjectAndArrays(obj)
  if (typeof path === 'number' && !Array.isArray(res)) {
    res = []
  }
  res[path] = val
  return res
}
