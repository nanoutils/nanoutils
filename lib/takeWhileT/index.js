export default function takeWhileT(predicate) {
  return reducer => {
    var isReduceable = true
    return (acc, v) => {
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
