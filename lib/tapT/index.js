export default (sideEffect) => (reducer) => (acc, v) => {
  sideEffect(v, acc)
  return reducer(acc, v)
}
