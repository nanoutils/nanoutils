var argsToArray = require('../argsToArray')

module.exports = function pipe() {
  var args = arguments
  return function(initVal) {
    return argsToArray(args)
      .reverse()
      .reduce(function(val, cb) {
        return cb(val)
      }, initVal)
  }
}
