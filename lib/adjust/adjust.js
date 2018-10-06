export default function adjust(change, index, array) {
  var result = array.slice()
  if (!array[index]) return result
  result[index] = change(result[index])
  return result
}
