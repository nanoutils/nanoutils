const { generateObjects, times: { TIME_100K, TIME_1K }, types: { TYPE_100K } } = require('../_internal/helpers/performance')

module.exports = function() {
  const [small, medium, big] = generateObjects(TIME_100K)
  const [innerS, innerM, innerB] = generateObjects(TIME_1K)
  const setInnerObj = (obj, inner) => { obj[0] = inner }

  setInnerObj(small, innerS)
  setInnerObj(medium, innerM)
  setInnerObj(big, innerB)

  return {
    type: `object_${TYPE_100K}`,
    argss: [
      [small, small],
      [medium, medium],
      [big, big]
    ]
  }
}
