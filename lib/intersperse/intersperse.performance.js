const { generateArrays, TIMES_1e3_1e4_1e5, types: { TYPE_100K } } = require('../_internal/helpers/performance')

module.exports = function() {
  const separator = 'a'
  const [big1, big2, big3] = generateArrays(TIMES_1e3_1e4_1e5, () => separator)

  return {
    type: TYPE_100K,
    argss: [
      [separator, big1],
      [separator, big2],
      [separator, big3]
    ]
  }
}
