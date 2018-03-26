export default function memoize(f) {
  var cache = {}
  return function() {
    var key = JSON.stringify(arguments)
    return key in cache
      ? cache[key]
      : (cache[key] = f.apply(this, arguments))
  }
}
