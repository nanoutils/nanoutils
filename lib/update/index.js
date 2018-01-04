var curry = require('../curry')
var lensPath = require('../lensPath')
var updateLens = require('../updateLens')

module.exports = curry(function getPath(path, cb, obj) {
  return updateLens(lensPath(path), cb, obj)
})
