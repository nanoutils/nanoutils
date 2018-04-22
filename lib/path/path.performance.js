const { generateNestedObjects, generateArrays, types: { TYPE_100K }, times: { TIME_100K } } = require('../_internal/helpers/performance')

module.exports = function() {
  const [objS, objM, objL] = generateNestedObjects(TIME_100K)
  const [pathS, pathM, pathL] = generateArrays(TIME_100K, i => i)

  return {
    type: `object_${TYPE_100K}`,
    argss: [
      [pathS.reverse(), objS],
      [pathM.reverse(), objM],
      [pathL.reverse(), objL]
    ]
  }
}
