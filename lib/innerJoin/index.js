import _curry3 from '../_internal/_curry3'

export default _curry3(function innerJoin(comparator, array, checkArray) {
  var join = []

  for (var index = 0; index < array.length; index++) {
    for (var checkIndex = 0; checkIndex < checkArray.length; checkIndex++) {
      if (comparator(array[index], checkArray[checkIndex])) {
        join.push(array[index])
        break
      }
    }
  }

  return join
})
