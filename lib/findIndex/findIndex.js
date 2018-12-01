export default function findIndex(predicate, array) {
  var index = 0
  while (index < array.length) {
    if (predicate(array[index])) {
      return index
    }
    index++
  }
  return -1
}
