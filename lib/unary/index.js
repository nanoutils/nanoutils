export default function unary(cb) {
  return function(a) {
    return cb(a)
  }
}
