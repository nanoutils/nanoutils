import curry2 from '../_internal/_curry2'

export default curry2((n, arr) => {
  if (arr.length < n) {
    return []
  }
  var res = Array(arr.length - n + 1)
  for (var i = 0; i < res.length; i++) {
    res[i] = arr.slice(i, i + n)
  }
  return res
})
