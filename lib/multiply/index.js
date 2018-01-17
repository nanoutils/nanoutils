var curry = require('../curry')

export default curry(function multiply(a, b) {
  return Number(a) * Number(b)
})
