const curry = require('../curry')

module.exports = curry(function lastIndexOf(val, obj) {
  return obj !== null && obj !== undefined && typeof obj.indexOf === 'function'
    ? obj.lastIndexOf(val)
    : -1
})
