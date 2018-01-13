var curry = require('../curry')
var toArray = require('../toArray')

module.exports = curry(function zipWith(cb, a, b) {
  var args = toArray(arguments).slice(1)
  var maxLen = args.reduce(function(max, cur) {
    return cur.length > max ? cur.length : max
  }, 0)
  return new Array(maxLen).fill(null).map(function(v, i) {
    return cb.apply(
      cb,
      args.map(function(arg) {
        return arg[i]
      })
    )
  })
})
