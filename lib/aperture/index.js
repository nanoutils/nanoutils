import curry2 from '../_internal/_curry2'

export default curry2(function aperture(n, arr) {
  if (arr.length < n) {
    return []
  }
  var res = new Array(arr.length - n + 1)
  for (var i = 0; i < res.length; i++) {
    res[i] = arr.slice(i, i + n)
  }
  return res
})
