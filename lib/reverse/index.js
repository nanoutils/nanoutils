var toArray = require('../toArray')

module.exports = function reverse(data) {
  return typeof data === 'string'
    ? toArray(data)
        .reverse()
        .join('')
    : toArray(data).reverse()
}
