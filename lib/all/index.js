import curry2 from '../_internal/_curry2'

export default curry2(function all(predicate, array) {
  var index = 0
  var length = array.length
  while (index < length && predicate(array[index])) {
    index += 1
  }
  return index === length
})
