import curry2 from '../_internal/_curry2'

export default curry2((fn, list) => {
  var length = list.length
  for (var i = length - 1; i >= 0; i--) {
    if (fn(list[i])) return i
  }
  return -1
})
