export default function binary(cb) {
  return function(a, b) {
    return cb(a, b)
  }
}
