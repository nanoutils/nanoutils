import curry2 from '../_internal/_curry2'

export default curry2(function groupBy(groupifier, array) {
  var object = {}
  for (var index = 0; index < array.length; index++) {
    var key = groupifier(array[index])
    key in object
      ? object[key].push(array[index])
      : object[key] = [array[index]]
  }
  return object
})
