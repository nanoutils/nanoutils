import curry from '../curry'

export default curry(function ifElse(cond, a, b) {
  return function(d) {
    return cond(d) ? a(d) : b(d)
  }
})
