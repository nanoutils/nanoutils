import curryN from '../curryN'

export default curryN(2, function converge(cb, enhancers) {
  return function(arg) {
    return cb.apply(
      cb,
      enhancers.map(function(enhancer) {
        return enhancer(arg)
      })
    )
  }
})
