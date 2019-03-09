export default function mergeWith(left, right, cb) {
  // default callback returns r[rKeys[i]], i.e. second argument
  cb = cb || function() { return arguments[1] }
  var result = {}
  var leftKeys = Object.keys(left)
  for (var leftIndex = 0; leftIndex < leftKeys.length; leftIndex++) {
    var leftKey = leftKeys[leftIndex]
    result[leftKey] = left[leftKey]
  }
  var rightKeys = Object.keys(right)
  for (var rightIndex = 0; rightIndex < rightKeys.length; rightIndex++) {
    var rightKey = rightKeys[rightIndex]
    result[rightKey] = rightKey in result
      ? cb(result[rightKey], right[rightKey], rightKey)
      : right[rightKey]
  }
  return result
}
