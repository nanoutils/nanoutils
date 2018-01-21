import curryN from '../curryN'

export default curryN(2, function converge(cb, enhancers) {
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
