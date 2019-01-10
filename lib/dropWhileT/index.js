export default function dropWhileT(predicate) {
  return function(reducer) {
    var isReduceable = false
    return function(acc, v) {
      if (!isReduceable) {
        isReduceable = !predicate(v)
      }
      if (!isReduceable) {
        return acc
      }
      return reducer(acc, v)
    }
  }
}
