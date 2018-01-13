var curry = require('../curry')

module.exports = curry(function is(constructor, val) {
  return val !== null && val !== undefined
    ? val.constructor === constructor
    : val === constructor
})
