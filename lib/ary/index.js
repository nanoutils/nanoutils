var toArray = require('../toArray')

module.exports = function ary(n, fn) {
  return function() {
    return fn.apply(fn, toArray(arguments).slice(0, n))
  }
}
