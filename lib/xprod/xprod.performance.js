const { generators: { getArrays }, times: { TIMES_1K }, types: { TYPE_1K } } = require('../_internal/helpers/performance')

module.exports = function() {
  const [small, medium, big] = getArrays(TIMES_1K, () => 'a')

  return {
    type: TYPE_1K,
    argss: [
      [small, small],
      [medium, medium],
      [big, big]
    ]
  }
}
