import curry2 from '../_internal/_curry2'

export default curry2(function findLastIndex(predicate, array) {
  var length = array.length
  for (var index = length - 1; index >= 0; index--) {
    if (predicate(array[index])) {
      return index
    }
  }
  return -1
})
