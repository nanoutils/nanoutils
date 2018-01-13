var curry = require('../curry')

module.exports = curry(function getLens(lens, from) {
  return lens(from).get()
})
