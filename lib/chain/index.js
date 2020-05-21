import curry2 from '../_internal/_curry2'

export default curry2((fn, item) => {
  if (typeof item === 'function') {
    return arr => fn(item(arr))(arr)
  }
  var result = []
  for (var i = 0; i < item.length; i++) {
    var elem = fn(item[i])
    if (Array.isArray(elem)) {
      [].push.apply(result, elem)
    } else {
      result.push(elem)
    }
  }
  return result
})
