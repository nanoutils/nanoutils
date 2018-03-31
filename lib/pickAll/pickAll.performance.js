const { generateObjects, TIMES_1e4_1e5_1e6 } = require('../_internal/helpers/performance')

module.exports = function getData() {
  const fKey = i => i
  const fValue = i => i
  const [big1, big2, big3] = generateObjects(TIMES_1e4_1e5_1e6, fKey, fValue)

  return {
    type: '1e4_1e5_1e6',
    argss: [
      [Object.keys(big1), big1],
      [Object.keys(big2), big2],
      [Object.keys(big3), big3]
    ]
  }
}
