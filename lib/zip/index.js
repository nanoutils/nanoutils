var toArray = require('../toArray')
var zipWith = require('../zipWith')

module.exports = zipWith(function(prev, cur) {
  return toArray(arguments).reduce(function(arr, i) {
    return arr.concat(i)
  }, [])
})
