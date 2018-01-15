var curry = require('../curry')

module.exports = curry(function converge(cb, enhancers) {
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
