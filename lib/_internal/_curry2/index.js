export default function curry2(f) {
  return function curried(a, b) {
    return arguments.length >= 2
      ? f(a, b)
      : function(b2) {
        return f(a, b2)
      }
  }
}
