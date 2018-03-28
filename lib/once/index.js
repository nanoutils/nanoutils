export default function once(fn) {
  var called = false
  var result
  return function() {
    if (called) return result
    called = true
    result = fn.apply(this, arguments)
    return result
  }
}
