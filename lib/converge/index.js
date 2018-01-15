import curry from '../curry'

export default curry(function converge(cb, enhancers) {
  return function(arg) {
    return cb.apply(
      cb,
      enhancers.map(function(enhancer) {
        return enhancer(arg)
      })
    )
  }
})
