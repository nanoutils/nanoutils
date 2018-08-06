const {
  generators: { getObjects },
  times: { TIMES_100K },
  types: { TYPE_100K }
} = require('../_internal/helpers/performance')

module.exports = function() {
  const getValue = i => i % 2 === 0 ? { arr: i } : i
  const [small, medium, big] = getObjects(TIMES_100K, x => x, getValue)
  const merge = (key, a, b) => key === 'arr' ? a : b

  return {
    type: `object_${TYPE_100K}`,
    argss: [
      [merge, small, small],
      [merge, medium, medium],
      [merge, big, big]
    ]
  }
}
