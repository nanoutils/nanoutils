export default function curry3(f) {
  return function curried(a, b, c) {
    if (arguments.length === 3) return f(a, b, c)
    if (arguments.length === 2) return function (c2) { return f(a, b, c2) }
    return function (b2, c2) {
      if (arguments.length === 2) return f(a, b2, c2)
      return function (c3) { return f(a, b2, c3) }
    }
  }
}
