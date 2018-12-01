import curry2 from '../_internal/_curry2'

export default curry2(function indexBy(indexifier, array) {
  var object = {}
  for (var index = 0; index < array.length; index++) {
    object[indexifier(array[index])] = array[index]
  }
  return object
})
