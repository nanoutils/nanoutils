const { generateArrays, TIMES_1e4_1e5_1e6 } = require('../_internal/helpers/performance')

module.exports = function() {
  const ch = 'a'
  const [big1, big2, big3] = generateArrays(TIMES_1e4_1e5_1e6, () => ch)

  return {
    type: '1e4_1e5_1e6',
    argss: [
      [0, big1.length, big1],
      [0, big2.length, big2],
      [0, big3.length, big3]
    ]
  }
}
