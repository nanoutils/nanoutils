var __ = require('../__')
var argsToArray = require('../argsToArray')

module.exports = function placehold(fn, n, args) {
  var oldArgs = args || []
  var length = n || fn.length
  var placeholdersLen = oldArgs.reduce(function(count, arg) {
    return count + (arg === __)
  }, 0)
  return oldArgs.length - placeholdersLen >= length
    ? fn.apply(fn, args)
    : function() {
        var newArgs = argsToArray(arguments)
        return placehold(
          fn,
          n,
          oldArgs
            .reduce(function(_next, a) {
              return _next.concat(
                a !== __ ? a : newArgs.length ? newArgs.shift() : __
              )
            }, [])
            .concat(newArgs)
        )
      }
}
