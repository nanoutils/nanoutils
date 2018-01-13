var set = require('../set')

module.exports = function zipObjectDeep(paths, vals) {
  return paths.reduce(function(res, p, i) {
    return set(p, vals[i], res)
  }, {})
}
