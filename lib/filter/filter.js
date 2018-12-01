function filterArray(predicate, array) {
  var filteredArray = []
  for (var index = 0; index < array.length; index++) {
    if (predicate(array[index])) {
      filteredArray.push(array[index])
    }
  }
  return filteredArray
}

function filterObject(predicate, object) {
  var filteredObject = {}
  var keys = Object.keys(object)
  for (var index = 0; index < keys.length; index++) {
    if (predicate(object[keys[index]])) {
      filteredObject[keys[index]] = object[keys[index]]
    }
  }
  return filteredObject
}

export default function filter(predicate, arrayOrObject) {
  return Array.isArray(arrayOrObject)
    ? filterArray(predicate, arrayOrObject)
    : filterObject(predicate, arrayOrObject)
}
