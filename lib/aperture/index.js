import curry2 from '../_internal/_curry2'

export default curry2(function aperture(size, array) {
  if (array.length < size) {
    return []
  }
  var result = Array(array.length - size + 1)
  for (var i = 0; i < result.length; i++) {
    result[i] = array.slice(i, i + size)
  }
  return result
})
