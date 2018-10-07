export default function both(first, second) {
  return function() {
    return first.apply(first, arguments) && second.apply(second, arguments)
  }
}
