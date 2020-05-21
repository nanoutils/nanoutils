export default (fn, ...args) =>
  args.length > 0
    ? fn(...args)
    : (...args2) => fn(...args2)
