const { generators: { getObjects }, types: { TYPE_100K }, times: { TIMES_100K } } = require('../_internal/helpers/performance')

module.exports = function() {
  const ch = 'a'
  const [small, medium, big] = getObjects(TIMES_100K, i => i, () => ch)

  return {
    type: `object_${TYPE_100K}`,
    argss: [
      [small],
      [medium],
      [big]
    ]
  }
}
