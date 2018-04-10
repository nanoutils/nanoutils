const { generateArrays, times: { TIME_100K }, types: { TYPE_100K } } = require('../_internal/helpers/performance')

module.exports = function() {
  const [small, medium, big] = generateArrays(TIME_100K, x => x)
  const func = (a, b) => a === b

  const sets = [
    [func, small],
    [func, medium],
    [func, big]
  ]

  return {
    argss: sets,
    type: TYPE_100K
  }
}
