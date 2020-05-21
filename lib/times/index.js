import curry2 from '../_internal/_curry2'

export default curry2((cb, idx) => {
  if (idx < 1) {
    return []
  }
  var arr = new Array(idx)
  var i = 0
  while (i < idx) {
    arr[i] = cb(i++)
  }
  return arr
})
