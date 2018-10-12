import curry2 from '../_internal/_curry2'

export default curry2(function dissocPath(path, object) {
  var newObject = {}
  for (var key in object) {
    newObject[key] = object[key]
  }
  if (path.length === 1) {
    delete newObject[path[0]]
  } else {
    // TODO: remove recursive call
    newObject[path[0]] = dissocPath(path.slice(1), object[path[0]])
  }
  return newObject
})
