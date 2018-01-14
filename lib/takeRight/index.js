var curry = require('../curry')
var toArray = require('../toArray')

module.exports = curry(function takeRight(n, from) {
  return n < 0
    ? from
    : typeof from === 'string'
      ? toArray(from)
          .slice(-n)
          .join('')
      : toArray(from).slice(-n)
})
