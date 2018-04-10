import _curry3 from '../_internal/_curry3'

export default _curry3(function mergeWithKey(func, left, right) {
  var result = {}
  var lKeys = Object.keys(left)
  var rKeys = Object.keys(right)
  for (var i = 0; i < lKeys.length; i++) result[lKeys[i]] = left[lKeys[i]]
  for (var k = 0; k < rKeys.length; k++) {
    result[rKeys[k]] = rKeys[k] in result
      ? func(rKeys[k], result[rKeys[k]], right[rKeys[k]])
      : right[rKeys[k]]
  }
  return result
})
