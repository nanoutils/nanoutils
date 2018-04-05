const { generateObjects, times: { TIME_100K, TIME_1K }, types: { TYPE_100K } } = require('../_internal/helpers/performance')

module.exports = function() {
  const [small, medium, big] = generateObjects(TIME_100K)
  const [innerS, innerM, innerB] = generateObjects(TIME_1K)
  const setInnerObj = (obj, inner, length) => { obj[Object.keys(obj)[length - 1]] = inner }

  setInnerObj(small, innerS, TIME_1K[0])
  setInnerObj(medium, innerM, TIME_1K[0])
  setInnerObj(small, innerB, TIME_1K[0])

  const sets = [
    [small, small],
    [medium, medium],
    [big, big]
  ]

  return {
    argss: sets,
    type: `object_${TYPE_100K}`
  }
}
