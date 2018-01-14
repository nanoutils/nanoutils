var curry = require('../curry')
var toArray = require('../toArray')

module.exports = curry(function dropWhile(cb, arr) {
  return !arr.length || !cb(arr[0]) ? arr : dropWhile(cb, toArray(arr).slice(1))
})
