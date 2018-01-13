var unzipWith = require('../unzipWith')
var argsToArray = require('../argsToArray')

module.exports = unzipWith(function(arr, i) {
  return argsToArray(arguments).reduce(function(arr, i) {
    return arr.concat(i)
  }, [])
})
