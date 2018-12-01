export default function indexed(fn) {
  var index = 0
  return function(value) {
    return fn(value, index++)
  }
}
