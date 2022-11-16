export default (predicate) => (reducer) => (acc, v) =>
  predicate(v) ? reducer(acc, v) : acc
