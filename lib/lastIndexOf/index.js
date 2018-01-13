const curry = require('../curry')

module.exports = curry(function lastIndexOf(val, obj) {
  return obj !== null && obj !== undefined && 'lastIndexOf' in obj
    ? obj.lastIndexOf(val)
    : -1
})
