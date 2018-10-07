import { shallowCloneObjectAndArrays } from '../_internal/_clone'

export default function assoc(path, value, functor) {
  var result = shallowCloneObjectAndArrays(functor)
  if (typeof path === 'number' && !Array.isArray(result)) {
    result = []
  }
  result[path] = value
  return result
}
