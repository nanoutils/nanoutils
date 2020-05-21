export default (predicate) => (reducer) => {
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
