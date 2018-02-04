import curry3 from '../_internal/_curry3'

export default curry3(function until(cond, cb, val) {
  return cond(val) ? until(cond, cb, cb(val)) : val
})
