var curry = require('../curry')
var getLens = require('../getLens')
var lensPath = require('../lensPath')

module.exports = curry(function get(path, obj) {
  return getLens(lensPath(path), obj)
})
