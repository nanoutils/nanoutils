import a2p from '../_internal/_a2p'
import p2a from '../_internal/_p2a'
import nAry from '../nAry'

export default nAry(1, function flattenObj(object, nest) {
  var nestArray = p2a(nest)
  return Object.keys(object).reduce(function(flattenedObject, key) {
    if (
      object[key] !== null &&
      typeof object[key] === 'object' &&
      !Array.isArray(object[key])
    ) {
      var nestedFlattenedObject = flattenObj(object[key], nestArray.concat(key))
      Object.keys(nestedFlattenedObject).forEach(function(newKey) {
        flattenedObject[newKey] = nestedFlattenedObject[newKey]
      })
    } else {
      flattenedObject[a2p(nestArray.concat(key))] = object[key]
    }
    return flattenedObject
  }, {})
})
