export default function filterT(predicate) {
  return function(reducer) {
    return function(acc, v) {
      if (predicate(v)) {
        return reducer(acc, v)
      }
      return acc
    }
  }
}
