export default function fill(value, start, end) {
  return function(array) {
    var shallowCopy = array.slice()
    return value !== undefined
      ? shallowCopy.fill(value, start || 0, end || array.length)
      : shallowCopy
  }
}
