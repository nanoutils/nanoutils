var curry = require('../curry')

module.exports = curry(function setLens(lens, val, from) {
  return lens(from).set(val)
})
