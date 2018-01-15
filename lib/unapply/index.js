var curry = require('../curry')
var toArray = require('../toArray')

module.exports = curry(function apply(fn, arg) {
  return fn.call(fn, toArray(arguments).slice(1))
})
