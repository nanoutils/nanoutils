export default function merge(left, right, cb) {
  // default callback returns r[rKeys[i]], i.e. second argument
  cb = cb || function() { return arguments[1] }
  var result = {}
  for (var leftKey in left) {
    if (left.hasOwnProperty(leftKey)) {
      result[leftKey] = left[leftKey]
    }
  }
  for (var rightKey in right) {
    if (right.hasOwnProperty(rightKey)) {
      result[rightKey] = rightKey in result
        ? cb(result[rightKey], right[rightKey], rightKey)
        : right[rightKey]
    }
  }
  return result
}
