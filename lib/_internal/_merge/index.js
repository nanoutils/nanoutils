export default function mergeWith(left, right, cb) {
  var result = {}
  var lKeys = Object.keys(left)
  var rKeys = Object.keys(right)
  for (var i = 0; i < lKeys.length; i++) result[lKeys[i]] = left[lKeys[i]]
  for (var k = 0; k < rKeys.length; k++) {
    result[rKeys[k]] = rKeys[k] in result && !!cb
      ? cb(result[rKeys[k]], right[rKeys[k]], rKeys[k])
      : right[rKeys[k]]
  }
  return result
}
