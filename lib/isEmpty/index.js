export default (value) => {
  var type = typeof value
  return value != null &&
    (type === 'object' || type === 'string') &&
    Object.keys(value).length === 0
}
