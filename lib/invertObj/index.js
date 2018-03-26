export default function invertObj(collection) {
  var result = {}
  for (var key in collection) {
    result[collection[key]] = key
  }
  return result
}
