import curry3 from '../_internal/_curry3'

export default curry3(function doWhile(cond, cb, val) {
  return cond(val) ? doWhile(cond, cb, cb(val)) : val
})
