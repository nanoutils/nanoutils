import _curry2 from '../_internal/_curry2'

export default _curry2(function memoizeWith(keyF, f) {
  var cache = {}
  return function() {
    var key = keyF.apply(this, arguments)
    cache[key] = cache[key] || { value: f.apply(this, arguments) }
    return cache[key].value
  }
})
