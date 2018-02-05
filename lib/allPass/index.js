import curry2 from '../_internal/_curry2'

export default curry2(function allPass(cbs, data) {
  return cbs.every(function(cb) {
    return cb(data)
  })
})
