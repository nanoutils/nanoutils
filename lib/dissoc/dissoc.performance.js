const { generateObjects, times: { TIME_100K }, types: { TYPE_100K } } = require('../_internal/helpers/performance')

module.exports = function() {
  const [small, medium, big] = generateObjects(TIME_100K)
  const getProp = (obj, length) => Object.keys(obj)[length / 2]

  const sets = [
    [getProp(small, TIME_100K[0]), small],
    [getProp(medium, TIME_100K[1]), medium],
    [getProp(big, TIME_100K[2]), big]
  ]

  return {
    argss: sets,
    type: `object_${TYPE_100K}`
  }
}
