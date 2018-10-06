export default function findIndex(predicate, array) {
  var i = 0
  while (i < array.length) {
    if (predicate(array[i])) return i
    i++
  }
  return -1
}
