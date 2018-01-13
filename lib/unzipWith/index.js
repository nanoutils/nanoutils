var curry = require('../curry')
var toArray = require('../toArray')

module.exports = curry(function unzipWith(cb, args) {
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
