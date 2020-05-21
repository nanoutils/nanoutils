export default (cb, a, b) => {
  var result = []
  var i, j, k
  for (i = 0; i < a.length; i++) {
    k = 0
    j = 0
    while (k < b.length && !cb(a[i], b[k])) {
      k += 1
    }
    if (k < b.length) continue
    while (j < result.length && !cb(a[i], result[j])) {
      j += 1
    }
    if (j === result.length) result.push(a[i])
  }
  return result
}
