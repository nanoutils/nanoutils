export default (obj) => {
  var res = {}
  if (typeof obj !== 'object') {
    return res
  }
  if (Array.isArray(obj)) {
    return obj.slice()
  }
  for (var k in obj) {
    res[k] = obj[k]
  }
  return res
}
