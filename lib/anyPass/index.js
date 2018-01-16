import curry from '../curry'

export default curry(function anyPass(cbs, data) {
  return cbs.some(function(cb) {
    return cb(data)
  })
})
