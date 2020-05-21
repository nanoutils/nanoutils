export default (item) => {
  var result = {}
  for (var key in item) {
    if (!result[item[key]]) {
      result[item[key]] = []
    }
    result[item[key]].push(key)
  }
  return result
}
