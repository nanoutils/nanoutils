export default function filterT(predicate) {
  return function(reducer) {
    return function(accumulator, value) {
      if (predicate(value)) {
        return reducer(accumulator, value)
      }
      return accumulator
    }
  }
}
