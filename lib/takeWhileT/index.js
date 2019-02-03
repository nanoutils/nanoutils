export default function takeWhileT(predicate) {
  return function(reducer) {
    var isReduceable = true
    return function(acc, v) {
      if (isReduceable) {
        isReduceable = predicate(v)
      }
      if (isReduceable) {
        return reducer(acc, v)
      }
      return acc
    }
  }
}
