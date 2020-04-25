import curry2 from '../_internal/_curry2'

export default curry2((fn, list) => {
  var i = list.length - 1
  while (i >= 0) {
    if (fn(list[i])) return list[i]
    i -= 1
  }
})
