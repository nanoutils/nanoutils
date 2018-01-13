var toArray = require('../toArray')

module.exports = function pipe() {
  var args = arguments
  return function(initVal) {
    return toArray(args)
      .reverse()
      .reduce(function(val, cb) {
        return cb(val)
      }, initVal)
  }
}