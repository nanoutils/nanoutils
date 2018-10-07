import { shallowCloneObjectAndArrays } from '../_internal/_clone'
import assoc from '../assoc/assoc'

export default function assocPath(paths, value, functor) {
  if (paths.length === 0) {
    return functor
  }
  if (paths.length === 1) {
    return assoc(paths[0], value, functor)
  }
  var result = shallowCloneObjectAndArrays(functor)
  var step = result
  var index = 1
  while (index < paths.length - 1) {
    step[paths[index - 1]] = assoc(paths[index], step[paths[index - 1]][paths[index]], step[paths[index - 1]])
    step = step[paths[index - 1]]
    index++
  }
  step[paths[index - 1]] = assoc(paths[index], value, step[paths[index - 1]])
  return result
}
