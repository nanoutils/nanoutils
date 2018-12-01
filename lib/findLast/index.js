import curry2 from '../_internal/_curry2'

export default curry2(function findLast(predicate, array) {
  var index = array.length - 1
  while (index >= 0) {
    if (predicate(array[index])) {
      return array[index]
    }
    index -= 1
  }
})
