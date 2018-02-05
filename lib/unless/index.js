import curry2 from '../_internal/_curry2'

export default curry2(function(cond, cb) {
  return function(d) {
    return cond(d) ? d : cb(d)
  }
})
