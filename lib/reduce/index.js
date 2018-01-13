var curry = require('../curry')
var toArray = require('../toArray')

module.exports = curry(function reduce(cb, initial, arr) {
  return arr === null || arr === undefined
    ? initial
    : toArray(arr).reduce(cb, initial)
})
