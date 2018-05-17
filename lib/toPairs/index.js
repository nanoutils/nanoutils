export default function toPairs(obj) {
  var result = []
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push(key)
    }
  }
  return result
}
