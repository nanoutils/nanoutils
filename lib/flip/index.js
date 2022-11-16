export default (fn) =>
  (...args) =>
    fn(...args.reverse())
