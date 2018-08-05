const { generators: { getArrays }, times: { TIMES_10K }, types: { TYPE_10K } } = require('../_internal/helpers/performance')

module.exports = function() {
  const [small, medium, big] = getArrays(TIMES_10K, x => x % 2 === 0 ? -x : x)
  return {
    type: TYPE_10K,
    argss: [
      [Math.abs, small],
      [Math.abs, medium],
      [Math.abs, big]
    ]
  }
}
