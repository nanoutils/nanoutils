const {
  generators: { getArrays },
  times: { TIMES_1M },
  types: { TYPE_1M }
} = require('../_internal/helpers/performance')

module.exports = function() {
  const chBefore = 'a'
  const chAfter = 'b'
  const [big1, big2, big3] = getArrays(TIMES_1M, () => chBefore)

  return {
    type: TYPE_1M,
    argss: [
      [big1.length / 2, chAfter, big1],
      [big2.length / 2, chAfter, big2],
      [big3.length / 2, chAfter, big3]
    ]
  }
}
