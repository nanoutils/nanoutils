const { generateArrays, generateObjects, types: { TYPE_100K }, times: { TIME_100K } } = require('../_internal/helpers/performance')

module.exports = function() {
  const ch = 'a'
  const [,, obj] = generateObjects(TIME_100K, i => i, () => ch)
  const [small, medium, big] = generateArrays(TIME_100K, i => i)

  return {
    type: `object_${TYPE_100K}`,
    argss: [
      [small, obj],
      [medium, obj],
      [big, obj]
    ]
  }
}
