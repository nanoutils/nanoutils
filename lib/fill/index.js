export default (val, start, end) => (arr) => {
  var shallowCopy = arr.slice()
  return val !== undefined
    ? shallowCopy.fill(val, start || 0, end || arr.length)
    : shallowCopy
}
