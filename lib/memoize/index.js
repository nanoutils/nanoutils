export default function memoize(f) {
  var cache = {}
  return function(key) {
    return key in cache
      ? cache[key]
      : (cache[key] = f(key))
  }
}
