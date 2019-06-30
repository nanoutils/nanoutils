import curry2 from '../_internal/_curry2'

export default curry2(function memoizeWith(keyF, f) {
  var cache = {}
  return (...args) => {
    var key = keyF(...args)
    return key in cache
      ? cache[key]
      : (cache[key] = f(...args))
  }
})
