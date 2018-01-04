var argsToArray = require('../argsToArray')
var zipWith = require('../zipWith')

module.exports = function zip() {
  return zipWith.apply(
    zipWith,
    [
      function(prev, cur) {
        return (prev || []).concat(cur)
      }
    ].concat(argsToArray(arguments))
  )
}
