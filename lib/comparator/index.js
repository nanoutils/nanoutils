export default function comparator(cb) {
  return function(a, b) {
    return cb(a, b) ? -1 : cb(b, a) ? 1 : 0
  }
}
