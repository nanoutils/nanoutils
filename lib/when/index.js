import curry2 from '../_internal/_curry2'

export default curry2(function(cond, cb) {
  return d => cond(d) ? cb(d) : d
})
