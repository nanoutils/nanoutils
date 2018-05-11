import _curry3 from '../_internal/_curry3'

function cloneObj(obj) {
  var res = {}
  if (typeof obj !== 'object') {
    return res
  }
  for (var k in obj) {
    res[k] = obj[k]
  }
  return res
}

export default _curry3(function assocPath(path, value, obj) {
  var res = cloneObj(obj)
  var step = res
  for (var k in path.slice(0, -1)) {
    step[path[k]] = cloneObj(step[path[k]])
    step = step[path[k]]
  }
  step[path.slice(-1)[0]] = value
  return res
})
