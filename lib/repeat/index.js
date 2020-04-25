import curry2 from '../_internal/_curry2'

export default curry2((val, idx) => {
  if (idx < 1) {
    return []
  }
  var arr = Array(idx)
  var i = 0
  while (i < idx) {
    arr[i++] = val
  }
  return arr
})
