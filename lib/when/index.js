var curry = require('../curry')

module.exports = curry(function(cond, cb) {
  return function(d) {
    return cond(d) ? cb(d) : d
  }
})
