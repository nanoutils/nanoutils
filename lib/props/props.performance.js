const {
  generators: { getObjects },
  types: { TYPE_100K },
  times: { TIMES_100K },
} = require('../_internal/helpers/performance')

module.exports = function () {
  const [small, medium, large] = getObjects(
    TIMES_100K,
    (i) => `key${i}`,
    (i) => `value${i}`,
  )

  return {
    type: `object_${TYPE_100K}`,
    argss: [
      [Object.keys(small), small],
      [Object.keys(medium), medium],
      [Object.keys(large), large],
    ],
  }
}
