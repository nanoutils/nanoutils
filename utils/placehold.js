var __ = require('../lib/__')
var argsToArray = require('./argsToArray')

module.exports = function placehold(fn, n, args) {
  var len = n !== undefined ? n : fn.length
  var args = args || []
  var count = args.reduce(function(count, arg) {
    return count + (arg === __)
  }, 0)
  return args.length - count >= len
    ? fn.apply(fn, args)
    : function() {
        var givenArgs = argsToArray(arguments)
        var newArgs = args
          .reduce(function(newArgs, arg) {
            return newArgs.concat(
              arg !== __ ? arg : givenArgs.length ? givenArgs.shift() : __
            )
          }, [])
          .concat(givenArgs)
        return placehold(fn, n, newArgs)
      }
}
