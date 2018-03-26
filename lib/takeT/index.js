export default function takeT(n) {
  return function(reducer) {
    return function(acc, v) {
      if (n-- > 0) {
        return reducer(acc, v)
      }
      return acc
    }
  }
}
