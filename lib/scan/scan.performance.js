const {
  generators: { getArrays },
  times: { TIMES_100K },
  types: { TYPE_100K }
} = require('../_internal/helpers/performance')

module.exports = function() {
  const [small, medium, big] = getArrays(TIMES_100K)
  const cb = (sum, value) => sum + value
  const initial = 0

  return {
    type: TYPE_100K,
    argss: [
      [cb, initial, small],
      [cb, initial, medium],
      [cb, initial, big]
    ]
  }
}
