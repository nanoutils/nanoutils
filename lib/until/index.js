import curry3 from '../_internal/_curry3'

export default curry3((cond, cb, val) => {
  var res = val
  while (!cond(res)) {
    res = cb(res)
  }
  return res
})
