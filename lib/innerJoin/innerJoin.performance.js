const { generateArrays, TIMES_1e2_1e3_1e4 } = require('../_internal/helpers/performance')

module.exports = function() {
  var f = (x, y) => x === y
  const [big1, big2, big3] = generateArrays(TIMES_1e2_1e3_1e4, i => i)

  return {
    type: '1e2_1e3_1e4',
    argss: [
      [f, big1, big1],
      [f, big2, big2],
      [f, big3, big3]
    ]
  }
}
