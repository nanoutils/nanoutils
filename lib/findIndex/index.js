import curry2 from '../_internal/_curry2'

export default curry2(function findIndex(fn, list) {
  var i = 0
  while (i < list.length) {
    if (fn(list[i])) return i
    i++
  }
  return -1
})
