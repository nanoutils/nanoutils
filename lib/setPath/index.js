var set = require('../set')
var curry = require('../curry')
var lensPath = require('../lensPath')

module.exports = curry(function getPath(path, val, obj) {
  return set(lensPath(path), val, obj)
})
