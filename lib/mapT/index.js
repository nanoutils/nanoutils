export default function mapT(f) {
  return function(reducer) {
    return function(acc, v) {
      return reducer(acc, f(v))
    }
  }
}
