var curryN = require('../curryN')

module.exports = function curry(fn) {
  return curryN(fn.length, fn)
}
