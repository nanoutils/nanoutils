var curry = require('./curry')

module.exports = curry(function get(lens, from) {
  return lens(from).get()
})
