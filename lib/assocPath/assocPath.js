import shallowCloneObjectAndArrays from '../_internal/_shallow_clone'
import assoc from '../assoc/assoc'

export default (paths, value, obj) => {
  if (paths.length === 0) {
    return obj
  }
  if (paths.length === 1) {
    return assoc(paths[0], value, obj)
  }
  var res = shallowCloneObjectAndArrays(obj)
  var step = res
  var index = 1
  while (index < paths.length - 1) {
    step[paths[index - 1]] = assoc(paths[index], step[paths[index - 1]][paths[index]], step[paths[index - 1]])
    step = step[paths[index - 1]]
    index++
  }
  step[paths[index - 1]] = assoc(paths[index], value, step[paths[index - 1]])
  return res
}
