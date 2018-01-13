var argsToArray = require('../argsToArray')
var zipWith = require('../zipWith')

module.exports = zipWith(function(prev, cur) {
  return argsToArray(arguments).reduce(function(arr, i) {
    return arr.concat(i)
  }, [])
})
