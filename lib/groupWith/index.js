import curry2 from '../_internal/_curry2'

export default curry2(function groupWith(comparator, array) {
  if (array.length === 0 || !Array.isArray(array)) {
    return []
  }
  var groups = [[array[0]]]
  var groupIndex = 0
  for (var index = 1; index < array.length; index++) {
    if (comparator(array[index - 1], array[index])) {
      groups[groupIndex].push(array[index])
      continue
    }
    groups[++groupIndex] = [array[index]]
  }
  return groups
})
