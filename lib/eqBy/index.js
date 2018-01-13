var curry = require('../curry')

module.exports = curry(function eqBy(cb, a, b) {
  return cb(a) === cb(b)
})
