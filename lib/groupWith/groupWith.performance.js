const {
  generators: { getArrays },
  times: { TIMES_100K },
  types: { TYPE_100K },
} = require('../_internal/helpers/performance')

module.exports = function () {
  const [small, medium, big] = getArrays(TIMES_100K, (x) => x)
  const isEqual = (a, b) => a === b

  return {
    type: TYPE_100K,
    argss: [
      [isEqual, small],
      [isEqual, medium],
      [isEqual, big],
    ],
  }
}
