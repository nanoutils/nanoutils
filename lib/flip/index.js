export default function flip(fn) {
  return function() {
    return fn.apply(fn, [].reverse.apply(arguments))
  }
}
