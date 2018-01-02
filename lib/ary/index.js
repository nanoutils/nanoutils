var argsToArray = require('../../utils/argsToArray')

module.exports = function ary(n, fn) {
  return function() {
    return fn.apply(fn, argsToArray(arguments).slice(0, n))
  }
}
