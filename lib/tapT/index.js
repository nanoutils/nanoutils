export default function tapT(sideEffect) {
  return function(reducer) {
    return function(acc, v) {
      sideEffect(v, acc)
      return reducer(acc, v)
    }
  }
}
