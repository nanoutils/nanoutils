export default function ap(callbacks, array) {
  var result = []
  var callbackIndex = 0
  var arrayIndex
  var callbacksLength = callbacks.length
  var arrayLength = array.length
  while (callbackIndex < callbacksLength) {
    arrayIndex = 0
    while (arrayIndex < arrayLength) {
      result.push(callbacks[callbackIndex](array[arrayIndex]))
      arrayIndex += 1
    }
    callbackIndex += 1
  }
  return result
}
