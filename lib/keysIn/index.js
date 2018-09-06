export default function keysIn(obj) {
  var result = []
  for (var key in obj) {
    result.push(key)
  }
  return result
}
