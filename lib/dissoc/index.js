import curry2 from '../_internal/_curry2'

export default curry2(function dissoc(deletedKey, object) {
  var newObject = {}
  for (var key in object) {
    newObject[key] = object[key]
  }
  delete newObject[deletedKey]
  return newObject
})
