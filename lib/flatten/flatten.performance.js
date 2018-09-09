const {
  generators: { getNestedArrays },
  times: { TIMES_1K },
  types: { TYPE_1K }
} = require('../_internal/helpers/performance')

module.exports = function() {
  const [small, medium, big] = getNestedArrays(TIMES_1K)

  return {
    type: TYPE_1K,
    argss: [
      [small],
      [medium],
      [big]
    ]
  }
}
