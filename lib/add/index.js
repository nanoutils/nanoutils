var curry = require('../curry')

export default curry(function add(a, b) {
  return Number(a) + Number(b)
})
