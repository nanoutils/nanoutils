export default function descend(callback) {
  return function(first, second) {
    var firstValue = callback(first)
    var secondValue = callback(second)

    return firstValue > secondValue
      ? -1
      : firstValue < secondValue
        ? 1
        : 0
  }
}
