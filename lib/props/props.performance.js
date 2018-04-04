const { generateObjects, types: { TYPE_100K }, times: { TIME_100K } } = require('../_internal/helpers/performance')

module.exports = function() {
  const [small, medium, large] = generateObjects(TIME_100K, i => `key${i}`, i => `value${i}`)

  return {
    type: `object_${TYPE_100K}`,
    argss: [
      [Object.keys(small), small],
      [Object.keys(medium), medium],
      [Object.keys(large), large]
    ]
  }
}
