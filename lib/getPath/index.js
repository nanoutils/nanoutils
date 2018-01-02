var get = require('../get')
var curry = require('../curry')
var lensPath = require('../lensPath')

module.exports = curry(function getPath(path, obj) {
  return get(lensPath(path), obj)
})
