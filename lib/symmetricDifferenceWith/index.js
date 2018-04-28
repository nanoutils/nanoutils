import _curry3 from '../_internal/_curry3'
import differenceWith from '../differenceWith/differenceWith'

export default _curry3(function symmetricDifferenceWith(func, list1, list2) {
  var a = differenceWith(func, list1, list2)
  var b = differenceWith(func, list2, list1)
  var i = 0
  var blen = b.length
  while (i < blen) {
    a.push(b[i])
    i += 1
  }
  return a
})
