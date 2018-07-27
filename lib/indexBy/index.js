import curry2 from '../_internal/_curry2'

export default curry2(function indexBy(cb, list) {
  var res = {}
  for (var i = 0; i < list.length; i++) {
    res[cb(list[i])] = list[i]
  }
  return res
})
