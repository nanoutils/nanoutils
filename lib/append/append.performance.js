const {
  generators: { getArrays },
  times: { TIMES_1M },
  types: { TYPE_1M }
} = require('../_internal/helpers/performance')

module.exports = function() {
  const [small, medium, big] = getArrays(TIMES_1M)
  const value = -1

  return {
    type: TYPE_1M,
    argss: [
      [value, small],
      [value, medium],
      [value, big]
    ]
  }
}
