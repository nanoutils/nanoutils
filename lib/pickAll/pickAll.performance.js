const { generateObjects, times: { TIME_1M }, types: { TYPE_1M } } = require('../_internal/helpers/performance')

module.exports = function getData() {
  const fKey = i => i
  const fValue = i => i
  const [big1, big2, big3] = generateObjects(TIME_1M, fKey, fValue)

  return {
    type: TYPE_1M,
    argss: [
      [Object.keys(big1), big1],
      [Object.keys(big2), big2],
      [Object.keys(big3), big3]
    ]
  }
}
