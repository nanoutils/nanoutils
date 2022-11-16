const {
  generators: { getArrays, getObjects },
  types: { TYPE_100K },
  times: { TIMES_100K },
} = require('../_internal/helpers/performance')

module.exports = function () {
  const ch = 'a'
  const [, , obj] = getObjects(
    TIMES_100K,
    (i) => i,
    () => ch,
  )
  const [small, medium, big] = getArrays(TIMES_100K, (i) => i)

  return {
    type: `object_${TYPE_100K}`,
    argss: [
      [small, obj],
      [medium, obj],
      [big, obj],
    ],
  }
}
