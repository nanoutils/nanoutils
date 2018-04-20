const { generateObjects, times: { TIME_100K }, types: { TYPE_100K } } = require('../_internal/helpers/performance')

module.exports = function() {
  const generateValue = (i, key) => (
    i % 2 === 0
      ? { arr: i }
      : i
  )
  const [small, medium, big] = generateObjects(TIME_100K, x => x, generateValue)
  const mergeFunc = (key, a, b) => (
    key === 'arr'
      ? a
      : b
  )

  const sets = [
    [mergeFunc, small, small],
    [mergeFunc, medium, medium],
    [mergeFunc, big, big]
  ]

  return {
    argss: sets,
    type: `object_${TYPE_100K}`
  }
}
