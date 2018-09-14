import curry3 from '../_internal/_curry3'

export default curry3(function until(cond, cb, val) {
  var res = val
  while (!cond(res)) {
    res = cb(res)
  }
  return res
})
