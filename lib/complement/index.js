export default function complement(cb) {
  return function() {
    return !cb.apply(cb, arguments)
  }
}
