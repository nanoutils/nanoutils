export default (param) => {
  if (Array.isArray(param)) return 'Array'
  if (param === null) return 'Null'
  if (param instanceof RegExp) return 'RegExp'
  var otherTypes = typeof param
  return otherTypes[0].toUpperCase() + otherTypes.slice(1)
}
