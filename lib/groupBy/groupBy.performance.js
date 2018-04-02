const { generateArrays, TIMES_1e4_1e5_1e6, types: { TYPE_1M } } = require('../_internal/helpers/performance')

module.exports = function getObject() {
  const [big1, big2, big3] = generateArrays(TIMES_1e4_1e5_1e6, i => i)
  const func = (x) => x % 2 === 0 ? 'even' : 'odd'

  return {
    type: TYPE_1M,
    argss: [
      [func, big1],
      [func, big2],
      [func, big3]
    ]
  }
}
