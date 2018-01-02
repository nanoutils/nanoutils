var curry = require('../curry')

module.exports = curry(function set(lens, val, from) {
  return lens(from).set(val)
})
