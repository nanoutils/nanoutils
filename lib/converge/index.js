import curry2 from '../_internal/_curry2'

export default curry2(function converge(callback, enhancers) {
  return function(value) {
    return callback.apply(
      callback,
      enhancers.map(function(enhancer) {
        return enhancer(value)
      })
    )
  }
})
