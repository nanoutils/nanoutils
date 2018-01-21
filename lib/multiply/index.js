var curryN = require('../curryN')

export default curryN(2, function multiply(a, b) {
  return a * b
})
