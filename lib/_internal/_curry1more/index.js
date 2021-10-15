export default (f) =>
  (...args) =>
    args.length >= 2 ? f(...args) : (...args2) => f(...args, ...args2)
