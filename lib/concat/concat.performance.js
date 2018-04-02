const { generateArrays, times: { TIME_1M }, types: { TYPE_1M } } = require('../_internal/helpers/performance')

module.exports = function() {
  const getRandom = () => Math.random() * 1e6 + 1e5
  const [big1, big2, big3] = generateArrays(TIME_1M, getRandom)

  return {
    type: TYPE_1M,
    argss: [
      [[], big1],
      [[], big2],
      [[], big3]
    ]
  }
}
