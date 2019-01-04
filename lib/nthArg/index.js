export default function nthArg(n) {
  return function() {
    return arguments[n + (n < 0 ? arguments.length : 0)]
  }
}
