const { generators: { getArrays }, times: { TIMES_1M }, types: { TYPE_1M } } = require('../_internal/helpers/performance')

module.exports = function() {
  const ch = 'a'
  const [big1, big2, big3] = getArrays(TIMES_1M, () => ch)

  return {
    type: TYPE_1M,
    argss: [
      [ch, big1],
      [ch, big2],
      [ch, big3]
    ]
  }
}
