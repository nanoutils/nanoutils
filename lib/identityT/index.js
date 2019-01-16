export default function identityT() {
  return function(reducer) {
    return function(acc, v) {
      return reducer(acc, v)
    }
  }
}
