import curry2 from '../_internal/_curry2'

export default curry2(function splitEvery(num, arr) {
  var res = []
  for (var i = 0; i < arr.length; i += num) {
    res.push(arr.slice(i, i + num))
  }
  return res
})
