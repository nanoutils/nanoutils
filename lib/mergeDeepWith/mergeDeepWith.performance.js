const { generators: { getObjects }, times: { TIMES_100K }, types: { TYPE_100K } } = require('../_internal/helpers/performance')

module.exports = function() {
  const generateValue = (i, key) => (
    i % 2 === 0
      ? { arr: i }
      : i
  )
  const [small, medium, big] = getObjects(TIMES_100K, x => x, generateValue)
  const sum = (a, b) => a + b

  return {
    type: `object_${TYPE_100K}`,
    argss: [
      [sum, small, small],
      [sum, medium, medium],
      [sum, big, big]
    ]
  }
}
