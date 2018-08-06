const { generators: { getArrays }, times: { TIMES_1M }, types: { TYPE_1M } } = require('../_internal/helpers/performance')

module.exports = function() {
  const fValues = x => TIMES_1M.map(length => x < length / 2 ? 2 : 1)
  const isEven = x => x % 2 === 0
  const [small, medium, big] = getArrays(TIMES_1M, fValues)

  return {
    type: TYPE_1M,
    argss: [
      [isEven, small],
      [isEven, medium],
      [isEven, big]
    ]
  }
}
