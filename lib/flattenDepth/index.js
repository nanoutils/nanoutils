var curry = require('../curry')
var flatten = require('../flatten')

module.exports = curry(function flattenDepth(num, arr) {
  return Array.isArray(arr)
    ? num === 0 ||
      arr.every(function(item) {
        return !Array.isArray(item)
      })
      ? arr
      : flattenDepth(num - 1, flatten(arr))
    : []
})
