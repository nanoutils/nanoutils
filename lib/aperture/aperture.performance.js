const { generators: { getArrays }, times: { TIMES_10K }, types: { TYPE_10K } } = require('../_internal/helpers/performance')

module.exports = function() {
  const [small, medium, big] = getArrays(TIMES_10K)

  return {
    type: TYPE_10K,
    argss: [
      [small.length / 10, small],
      [medium.length / 10, medium],
      [big.length / 10, big]
    ]
  }
}
