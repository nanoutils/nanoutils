const curry = require('../curry')

module.exports = curry(function lastIndexOf(val, obj) {
  return obj !== null &&
    obj !== undefined &&
    typeof obj.lastIndexOf === 'function'
    ? obj.lastIndexOf(val)
    : -1
})
