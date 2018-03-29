import _curry3 from '../_internal/_curry3'

export default _curry3(function remove(start, count, list) {
  var result = [].concat(list)
  result.splice(start, count)
  return result
})
