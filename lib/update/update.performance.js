const { generateArrays, TIMES_1e4_1e5_1e6 } = require('../_internal/helpers/performance')

module.exports = function() {
  const chBefore = 'a'
  const chAfter = 'b'
  const [big1, big2, big3] = generateArrays(TIMES_1e4_1e5_1e6, () => chBefore)

  return {
    type: '1e4_1e5_1e6',
    argss: [
      [big1.length / 2, chAfter, big1],
      [big2.length / 2, chAfter, big2],
      [big3.length / 2, chAfter, big3]
    ]
  }
}
