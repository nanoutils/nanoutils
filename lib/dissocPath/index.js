import curry2 from '../_internal/_curry2'

export default curry2(function dissocPath(path, obj) {
  var result = {}
  for (var key in obj) result[key] = obj[key]
  if (path.length === 1) delete result[path[0]]
  else result[path[0]] = dissocPath(path.slice(1), obj[path[0]])
  return result
})
