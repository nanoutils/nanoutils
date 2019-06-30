export default function dropWhileT(predicate) {
  return reducer => {
    var isReduceable = false
    return (acc, v) => {
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
