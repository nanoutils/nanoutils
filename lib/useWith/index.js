import curry2 from '../_internal/_curry2'

export default curry2(function converge(cb, enhancers) {
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
