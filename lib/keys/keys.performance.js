const { types: { TYPE_100K }, times: { TIME_100K }, generateObjects } = require('../_internal/helpers/performance')

module.exports = function() {
  const [small, medium, big] = generateObjects(TIME_100K, i => i, () => 'a')

  return {
    type: `object_${TYPE_100K}`,
    argss: [
      [small],
      [medium],
      [big]
    ]
  }
}
