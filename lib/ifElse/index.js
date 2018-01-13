var curry = require('../curry')

module.exports = curry(function ifElse(cond, a, b) {
  return function(d) {
    return cond(d) ? a(d) : b(d)
  }
})