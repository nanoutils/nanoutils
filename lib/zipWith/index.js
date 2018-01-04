var argsToArray = require('../argsToArray')

module.exports = function zipWith() {
  var cb = arguments[0]
  var args = argsToArray(arguments).slice(1)
  var maxLen = args.reduce(function(max, cur) {
    return cur.length > max ? cur.length : max
  }, 0)
  var res = []
  for (var i = 0; i < maxLen; i++) {
    res[i] = args.reduce(function(prev, cur) {
      return cb(prev, cur[i])
    }, null)
  }
  return res
}
