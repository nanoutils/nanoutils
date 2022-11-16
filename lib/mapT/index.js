export default (f) => (reducer) => (acc, v) => reducer(acc, f(v))
