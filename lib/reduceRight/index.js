var curry = require('../curry')
var toArray = require('../toArray')

module.exports = curry(function reduceRight(cb, initial, arr) {
  return arr === null || arr === undefined
    ? initial
    : toArray(arr).reduceRight(cb, initial)
})
