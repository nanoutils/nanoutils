const { generators: { getObjects }, times: { TIMES_100K }, types: { TYPE_100K } } = require('../_internal/helpers/performance')

module.exports = function() {
  // here we have only 50% of common keys
  const [small1, medium1, big1] = getObjects(TIMES_100K)
  const [small2, medium2, big2] = getObjects(TIMES_100K, x => x * 2)

  return {
    type: `object_${TYPE_100K}`,
    argss: [
      [small1, small2],
      [medium1, medium2],
      [big1, big2]
    ]
  }
}
