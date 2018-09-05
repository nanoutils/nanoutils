import _curry3 from '../_internal/_curry3'

export default _curry3(function scan(cb, init, list) {
  var res = [init]
  var i = 0
  while (i < list.length) {
    res.push(cb(res[res.length - 1], list[i++]))
  }
  return res
})
