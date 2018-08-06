const { generators: { getArrays }, times: { TIMES_100K }, types: { TYPE_100K } } = require('../_internal/helpers/performance')

module.exports = function() {
  const separator = 'a'
  const [big1, big2, big3] = getArrays(TIMES_100K, () => separator)

  return {
    type: TYPE_100K,
    argss: [
      [separator, big1],
      [separator, big2],
      [separator, big3]
    ]
  }
}
