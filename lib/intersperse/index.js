import curry2 from '../_internal/_curry2'

export default curry2(function intersperse(separator, array) {
  var interspersedArray = Array(2 * array.length - 1)
  for (var index = 0; index < array.length - 1; index++) {
    interspersedArray[2 * index] = array[index]
    interspersedArray[2 * index + 1] = separator
  }
  interspersedArray[2 * index] = array[index]
  return interspersedArray
})
