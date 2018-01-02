var curry = require('../curry')
var update = require('../update')
var lensPath = require('../lensPath')

module.exports = curry(function getPath(path, cb, obj) {
  return update(lensPath(path), cb, obj)
})
