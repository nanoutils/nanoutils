const { generateArrays, times: { TIME_1M }, types: { TYPE_1M } } = require('../_internal/helpers/performance')

module.exports = function() {
  const [small, medium, big] = generateArrays(TIME_1M, x => x)
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
