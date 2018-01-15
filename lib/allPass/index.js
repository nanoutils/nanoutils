import curry from '../curry'

export default curry(function allPass(cbs, data) {
  return cbs.every(function(cb) {
    return cb(data)
  })
})
