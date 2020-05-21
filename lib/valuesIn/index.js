export default (obj) => {
  var values = []
  for (var key in obj) {
    values.push(obj[key])
  }
  return values
}
