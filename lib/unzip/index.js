var unzipWith = require('../unzipWith')
var toArray = require('../toArray')

module.exports = unzipWith(function(arr, i) {
  return toArray(arguments).reduce(function(arr, i) {
    return arr.concat(i)
  }, [])
})
