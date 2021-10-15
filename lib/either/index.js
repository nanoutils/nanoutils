export default (fn1, fn2) =>
  (...args) =>
    fn1(...args) || fn2(...args)
