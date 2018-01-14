var curry = require('../curry')
var toArray = require('../toArray')

module.exports = curry(function drop(n, from) {
  var res = toArray(from).slice(n >= 0 ? n : 0)
  return typeof from === 'string' ? res.join('') : res
})
