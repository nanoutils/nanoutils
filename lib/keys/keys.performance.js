const {
  generators: { getObjects },
  types: { TYPE_100K },
  times: { TIMES_100K },
} = require('../_internal/helpers/performance')

module.exports = function () {
  const [small, medium, big] = getObjects(
    TIMES_100K,
    (i) => i,
    () => 'a',
  )

  return {
    type: `object_${TYPE_100K}`,
    argss: [[small], [medium], [big]],
  }
}
