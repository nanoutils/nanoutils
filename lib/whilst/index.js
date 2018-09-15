import curry3 from '../_internal/_curry3'

export default curry3(function whilst(cond, cb, val) {
  while (cond(val) === true) {
    val = cb(val)
  }
  return val
})
