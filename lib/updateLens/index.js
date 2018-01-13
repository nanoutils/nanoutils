var curry = require('../curry')

module.exports = curry(function updateLens(lens, cb, value) {
  var l = lens(value)
  return l.set(cb(l.get()))
})
