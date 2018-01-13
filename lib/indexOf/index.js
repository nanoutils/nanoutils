const curry = require('../curry')

module.exports = curry(function indexOf(val, obj) {
  return obj !== null && obj !== undefined && 'indexOf' in obj
    ? obj.indexOf(val)
    : -1
})
