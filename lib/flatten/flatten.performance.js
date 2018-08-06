const { generators: { getArrays }, times: { TIMES_1K }, types: { TYPE_1K } } = require('../_internal/helpers/performance')

var rollUp = arr => arr.reduce((result, value) => [value, result], [])

module.exports = function() {
  const [small, medium, big] = getArrays(TIMES_1K, i => i).map(rollUp)

  return {
    type: TYPE_1K,
    argss: [
      [small],
      [medium],
      [big]
    ]
  }
}
