export default (obj) => {
  var result = []
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push([key, obj[key]])
    }
  }
  return result
}
