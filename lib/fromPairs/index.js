export default function fromPairs(array) {
  var object = {}
  var index = 0
  while (index < array.length) {
    object[array[index][0]] = array[index][1]
    index++
  }
  return object
}
