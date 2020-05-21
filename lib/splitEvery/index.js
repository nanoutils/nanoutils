import curry2 from '../_internal/_curry2'

export default curry2((num, arr) => {
  if (num < 0) {
    return []
  }
  var res = Array(Math.ceil(arr.length / num))
  for (var i = 0; i < res.length; i++) {
    var from = i * num
    res[i] = arr.slice(from, from + num)
  }
  return res
})
