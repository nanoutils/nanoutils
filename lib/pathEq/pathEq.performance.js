const {
  generators: { getArrays, getNestedObjects },
  types: { TYPE_100K },
  times: { TIMES_100K },
} = require('../_internal/helpers/performance')

module.exports = function () {
  const [objS, objM, objL] = getNestedObjects(TIMES_100K)
  const [pathS, pathM, pathL] = getArrays(TIMES_100K, (i) => i)

  return {
    type: `object_${TYPE_100K}`,
    argss: [
      [pathS.reverse(), 'a', objS],
      [pathM.reverse(), 'a', objM],
      [pathL.reverse(), 'a', objL],
    ],
  }
}
