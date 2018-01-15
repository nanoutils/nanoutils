var eq = require('../eq')
var curry = require('../curry')

module.exports = curry(function eqLens(lens, val, obj) {
  return eq(lens(obj).get(), val)
})
