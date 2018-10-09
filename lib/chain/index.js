import curry2 from '../_internal/_curry2'

export default curry2(function chain(callback, extractorOrArray) {
  if (typeof extractorOrArray === 'function') {
    return function(array) {
      return callback(extractorOrArray(array))(array)
    }
  }
  var result = []
  for (var i = 0; i < extractorOrArray.length; i++) {
    var elem = callback(extractorOrArray[i])
    if (Array.isArray(elem)) {
      [].push.apply(result, elem)
    } else {
      result.push(elem)
    }
  }
  return result
})
