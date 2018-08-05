const { generators: { getArrays }, times: { TIMES_1M }, types: { TYPE_1M } } = require('../_internal/helpers/performance')

module.exports = function() {
  const [small, medium, big] = getArrays(TIMES_1M, x => x)
  const isEven = x => x % 2 === 0

  return {
    type: TYPE_1M,
    argss: [
      [isEven, small],
      [isEven, medium],
      [isEven, big]
    ]
  }
}
