export default function complement(callback) {
  return function() {
    return !callback.apply(callback, arguments)
  }
}
