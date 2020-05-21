export default (idx, value, list) => {
  var result = list.slice()
  if (idx >= 0 && idx < result.length) {
    result[idx] = value
  }
  return result
}
