const { generators: { getArrays }, times: { TIMES_1M }, types: { TYPE_1M } } = require('../_internal/helpers/performance')

module.exports = function() {
  const ch = 'a'
  const [small, medium, big] = getArrays(TIMES_1M, () => ch)

  return {
    type: TYPE_1M,
    argss: [
      [0, small.length, small],
      [0, medium.length, medium],
      [0, big.length, big]
    ]
  }
}
