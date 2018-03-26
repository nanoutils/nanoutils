import _curry2 from '../_internal/_curry2'

export default _curry2(function memoizeWith(keyF, f) {
  var cache = {}
  return function() {
    var key = keyF.apply(this, arguments)
    return key in cache
      ? cache[key]
      : (cache[key] = f.apply(this, arguments))
  }
})
