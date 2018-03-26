export default function invert(obj) {
  var result = {}
  var keys = Object.keys(obj)
  for (var i = 0; i < keys.length; i++) {
    if (!result[obj[keys[i]]]) result[obj[keys[i]]] = []
    result[obj[keys[i]]].push(keys[i])
  }
  return result
}
