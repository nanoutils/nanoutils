export default function ascend(callback) {
  return function(first, second) {
    var callbackFirst = callback(first)
    var callbackSecond = callback(second)

    return callbackFirst > callbackSecond
      ? 1
      : callbackFirst < callbackSecond
        ? -1
        : 0
  }
}
