export default (n) => (...args) => args[n + (n < 0 ? args.length : 0)]
