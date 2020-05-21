export default (obj) => {
  var result = []
  for (var key in obj) {
    result.push(key)
  }
  return result
}
