var curry = require('./curry')

module.exports = curry(function update(lens, cb, value) {
  var l = lens(value)
  return l.set(cb(l.get()))
})
