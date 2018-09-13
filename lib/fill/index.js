export default function(val, start, end) {
  return function(arr) {
    var shallowCopy = arr.slice()
    return val !== undefined
      ? shallowCopy.fill(val, start || 0, end || arr.length)
      : shallowCopy
  }
}
