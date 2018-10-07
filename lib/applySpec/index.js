import curry2more from '../_internal/_curry2more'

export default curry2more(function applySpec(callbacks) {
  var array = [].slice.call(arguments, 1)
  return Object.keys(callbacks).reduce(function(result, key) {
    result[key] = typeof callbacks[key] === 'object'
      ? applySpec.apply(applySpec, [callbacks[key]].concat(array))
      : callbacks[key].apply(callbacks[key], array)
    return result
  }, {})
})
