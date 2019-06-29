export default function memoize(f) {
  var cache = {}
  return (...args) => {
    var key = JSON.stringify(args)
    return key in cache
      ? cache[key]
      : (cache[key] = f(...args))
  }
}
