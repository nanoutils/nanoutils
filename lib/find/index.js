import curry2 from '../_internal/_curry2'

export default curry2(function find(predicate, array) {
  var index = 0
  while (index < array.length) {
    if (predicate(array[index])) {
      return array[index]
    }
    index += 1
  }
})
