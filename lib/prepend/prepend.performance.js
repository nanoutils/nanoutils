const { generateArrays, TIMES_1e4_1e5_1e6 } = require('../_internal/helpers/performance')

module.exports = function() {
  const ch = 'a'
  const [big1, big2, big3] = generateArrays(TIMES_1e4_1e5_1e6, () => ch)

  return {
    type: '1e4_1e5_1e6',
    argss: [
      [ch, big1],
      [ch, big2],
      [ch, big3]
    ]
  }
}
