export default function either(first, second) {
  return function() {
    return first.apply(first, arguments) || second.apply(second, arguments)
  }
}
