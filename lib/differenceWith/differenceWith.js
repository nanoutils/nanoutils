export default function differenceWith(cb, a, b) {
  var result = []
  var i, j, k
  var alen = a.length
  var blen = b.length
  for (i = 0; i < alen; i++) {
    k = 0
    j = 0
    while (k < blen && !cb(a[i], b[k])) {
      k += 1
    }
    if (k < blen) continue
    while (j < result.length && !cb(a[i], result[j])) {
      j += 1
    }
    if (j === result.length) result.push(a[i])
  }
  return result
}
