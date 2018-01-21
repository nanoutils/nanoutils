const curryN = require('../curryN')

export default curryN(2, function lastIndexOf(val, obj) {
  return obj !== null &&
    obj !== undefined &&
    typeof obj.lastIndexOf === 'function'
    ? obj.lastIndexOf(val)
    : -1
})
