var curry = require('../curry')

module.exports = curry(function eq(a, b) {
  return a === b
})
