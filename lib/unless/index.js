import curry from '../curry'

export default curry(function(cond, cb) {
  return function(d) {
    return cond(d) ? d : cb(d)
  }
})
