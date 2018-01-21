var curryN = require('../curryN')

export default curryN(2, function add(a, b) {
  return Number(a) + Number(b)
})
