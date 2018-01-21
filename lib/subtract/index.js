var curryN = require('../curryN')

export default curryN(2, function subtract(a, b) {
  return a - b
})
