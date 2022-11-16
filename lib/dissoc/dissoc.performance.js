const {
  generators: { getObjects },
  times: { TIMES_100K },
  types: { TYPE_100K },
} = require('../_internal/helpers/performance')

module.exports = function () {
  const [small, medium, big] = getObjects(TIMES_100K)
  const getProp = (obj, length) => Object.keys(obj)[length / 2]

  const sets = [
    [getProp(small, TIMES_100K[0]), small],
    [getProp(medium, TIMES_100K[1]), medium],
    [getProp(big, TIMES_100K[2]), big],
  ]

  return {
    type: `object_${TYPE_100K}`,
    argss: sets,
  }
}
