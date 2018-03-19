import _curry3 from '../_internal/_curry3'

export default _curry3(function slice(fromInclusive, toExclusive, array) {
  if (isNaN(fromInclusive) || isNaN(toExclusive) || fromInclusive >= toExclusive) {
    return []
  }

  var from = fromInclusive < 0
    ? 0
    : fromInclusive
  var to = toExclusive > array.length
    ? array.length
    : toExclusive
  return array.slice(from, to)
})
