const {
  generators: { getObjects },
  times: { TIMES_100K, TIMES_1K },
  types: { TYPE_100K },
} = require('../_internal/helpers/performance')

module.exports = function () {
  const [small, medium, big] = getObjects(TIMES_100K)
  const [innerS, innerM, innerB] = getObjects(TIMES_1K)
  const setInnerObj = (obj, inner) => {
    obj[0] = inner
  }

  setInnerObj(small, innerS)
  setInnerObj(medium, innerM)
  setInnerObj(big, innerB)

  return {
    type: `object_${TYPE_100K}`,
    argss: [
      [small, small],
      [medium, medium],
      [big, big],
    ],
  }
}
