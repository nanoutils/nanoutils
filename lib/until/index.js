import curry from '../curry'

export default curry(function until(cond, cb, val) {
  return cond(val) ? until(cond, cb, cb(val)) : val
})
