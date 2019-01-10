export default function dropT(n) {
  return function(reducer) {
    var m = n
    return function(acc, v) {
      if (m-- > 0) {
        return acc
      }
      return reducer(acc, v)
    }
  }
}
