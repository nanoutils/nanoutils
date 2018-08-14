import curry2 from '../_internal/_curry2'

export default curry2(function aperture(n, arr) {
  var res = []
  var i = 0
  while (i < arr.length - n + 1) {
    res.push(arr.slice(i, i + n))
    i += 1
  }
  return res
})
