var argsToArray = require('../utils/argsToArray')
var placehold = require('../utils/placehold')

module.exports = function curryN(n, fn) {
  return placehold(function() {
    // NOTE: should it ignore extra args?
    // ? fn.apply(fn, argsToArray(arguments).slice(0, n))
    return n - arguments.length <= 0
      ? fn.apply(fn, arguments)
      : curryN(
          n - arguments.length,
          fn.bind.apply(fn, [fn].concat(argsToArray(arguments)))
        )
  }, n)
}
