var curry = require('../curry')
var setLens = require('../setLens')
var lensPath = require('../lensPath')

module.exports = curry(function getPath(path, val, obj) {
  return setLens(lensPath(path), val, obj)
})
