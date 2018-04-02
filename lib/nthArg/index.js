export default function nthArg(n) {
  return function() {
    return n < 0
      ? arguments[arguments.length + n]
      : arguments[n]
  }
}
