export default function once(fn) {
  var called = false
  var result
  return (...args) => {
    if (called) return result
    called = true
    result = fn(...args)
    return result
  }
}
