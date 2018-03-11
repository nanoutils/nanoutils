import curry3 from '../_internal/_curry3'

export default curry3(function whilst(cond, cb, val) {
  return cond(val) ? whilst(cond, cb, cb(val)) : val
})
