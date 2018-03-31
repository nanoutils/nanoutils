const { generateArrays, TIMES_1e4_1e5_1e6 } = require('../_internal/helpers/performance')

module.exports = function getPairsList() {
  const [big1, big2, big3] = generateArrays(TIMES_1e4_1e5_1e6, i => [i, 'a'])

  return {
    type: '1e4_1e5_1e6',
    argss: [
      [big1],
      [big2],
      [big3]
    ]
  }
}
