export default function flatten(array) {
  var flattenedArray = []

  function iterate(value) {
    if (Array.isArray(value)) {
      var index = 0
      while (index < value.length) {
        iterate(value[index])
        index += 1
      }
      return
    }
    flattenedArray.push(value)
  }

  iterate(array)

  return flattenedArray
}
