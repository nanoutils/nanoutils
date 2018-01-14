var curry = require('../curry')
var toArray = require('../toArray')

module.exports = curry(function dropRight(n, from) {
  var res = toArray(from).slice(0, from.length - (n >= 0 ? n : 0))
  return typeof from === 'string' ? res.join('') : res
})
