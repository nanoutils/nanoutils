var eq = require('../eq')
var curry = require('../curry')

module.exports = curry(function eqBy(cb, a, b) {
  return eq(cb(a), cb(b))
})
