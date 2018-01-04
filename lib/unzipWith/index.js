var argsToArray = require('../argsToArray')

module.exports = function unzip(args, cb) {
  var maxLen = args.reduce(function(max, cur) {
    return cur.length > max ? cur.length : max
  }, 0)
  var res = []
  for (var i = 0; i < maxLen; i++) {
    res[i] = args.reduce(function(res, arr) {
      return cb(res, arr[i])
    }, null)
  }
  return res
}
