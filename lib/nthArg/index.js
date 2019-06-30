export default function nthArg(n) {
  return (...args) => args[n + (n < 0 ? args.length : 0)]
}
