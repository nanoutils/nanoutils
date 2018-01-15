import curry from '../curry'

export default curry(function converge(cb, enhancers) {
  return function() {
    var args = arguments
    return cb.apply(
      cb,
      enhancers.map(function(enhancer, idx) {
        return enhancer(args[idx])
      })
    )
  }
})
