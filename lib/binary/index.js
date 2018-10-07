export default function binary(callback) {
  return function(first, second) {
    return callback(first, second)
  }
}
