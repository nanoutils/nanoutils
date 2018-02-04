import curry2 from '../_internal/_curry2'

export default curry2(function converge(cb, enhancers) {
  return function(arg) {
    return cb.apply(
      cb,
      enhancers.map(function(enhancer) {
        return enhancer(arg)
      })
    )
  }
})
