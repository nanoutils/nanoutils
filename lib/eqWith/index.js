var curry = require('../curry')

module.exports = curry(function eqWith(cb, a, b) {
  return cb(a, b)
})
