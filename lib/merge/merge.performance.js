const { generateObjects, times: { TIME_100K }, types: { TYPE_100K } } = require('../_internal/helpers/performance')

module.exports = function() {
  // here we have only 50% of common keys
  const [small1, medium1, big1] = generateObjects(TIME_100K)
  const [small2, medium2, big2] = generateObjects(TIME_100K, x => x * 2)

  const sets = [
    [small1, small2],
    [medium1, medium2],
    [big1, big2]
  ]

  return {
    argss: sets,
    type: `object_${TYPE_100K}`
  }
}
