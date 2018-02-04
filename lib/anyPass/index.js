import curry2 from '../_internal/_curry2'

export default curry2(function anyPass(cbs, data) {
  return cbs.some(function(cb) {
    return cb(data)
  })
})
