export default function tapT(sideEffect) {
  return reducer => (acc, v) => {
    sideEffect(v, acc)
    return reducer(acc, v)
  }
}
