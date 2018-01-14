var curry = require('../curry')
var toArray = require('../toArray')

module.exports = curry(function take(n, from) {
  return n < 0
    ? from
    : typeof from === 'string'
      ? toArray(from)
          .slice(0, n)
          .join('')
      : toArray(from).slice(0, n)
})
