var curryN = require('../curryN')

export default curryN(2, function divide(a, b) {
  return a / b
})
