const curry = require('../curry')

module.exports = curry(function indexOf(val, obj) {
  return obj !== null && obj !== undefined && typeof obj.indexOf === 'function'
    ? obj.indexOf(val)
    : -1
})
