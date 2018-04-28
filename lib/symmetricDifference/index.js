import difference from '../difference/difference'

export default function symmetricDifference(list1, list2) {
  var a = difference(list1, list2)
  var b = difference(list2, list1)
  var i = 0
  var blen = b.length
  while (i < blen) {
    a.push(b[i])
    i += 1
  }
  return a
}
