const withCallback = (l, r, rKeys, cb) => {
  for (var i = 0; i < rKeys.length; i++) {
    l[rKeys[i]] = rKeys[i] in l
      ? cb(l[rKeys[i]], r[rKeys[i]], rKeys[i])
      : r[rKeys[i]]
  }
}

const withoutCallback = (l, r, rKeys) => {
  for (var i = 0; i < rKeys.length; i++) {
    l[rKeys[i]] = r[rKeys[i]]
  }
}

export default (left, right, cb) => {
  var result = {}
  var lKeys = Object.keys(left)
  var rKeys = Object.keys(right)
  for (var i = 0; i < lKeys.length; i++) result[lKeys[i]] = left[lKeys[i]]
  if (cb) withCallback(result, right, rKeys, cb)
  else withoutCallback(result, right, rKeys)
  return result
}
