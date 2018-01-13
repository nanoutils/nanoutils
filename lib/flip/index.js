var toArray = require('../toArray')

module.exports = function flip(fn) {
  return function() {
    return fn.apply(fn, toArray(arguments).reverse())
  }
}
