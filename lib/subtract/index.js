var curry = require('../curry')

export default curry(function subtract(a, b) {
  return Number(a) - Number(b)
})
