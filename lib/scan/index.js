import curry3 from '../_internal/_curry3'

export default curry3(function scan(cb, init, list) {
  var res = Array(list.length + 1)
  res[0] = init
  var i = 0
  while (i < list.length) {
    res[i + 1] = cb(res[i], list[i++])
  }
  return res
})
