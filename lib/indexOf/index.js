const curryN = require('../curryN')

export default curryN(2, function indexOf(val, obj) {
  return obj !== null && obj !== undefined && typeof obj.indexOf === 'function'
    ? obj.indexOf(val)
    : -1
})
