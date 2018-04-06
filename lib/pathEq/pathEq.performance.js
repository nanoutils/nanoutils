const { generateNestedObjects, generateArrays, types: { TYPE_100K }, times: { TIME_100K } } = require('../_internal/helpers/performance')

module.exports = function() {
  const [objS, objM, objL] = generateNestedObjects(TIME_100K)
  const [pathS, pathM, pathL] = generateArrays(TIME_100K, i => i)

  const sets = [
    [pathS.reverse(), 'a', objS],
    [pathM.reverse(), 'a', objM],
    [pathL.reverse(), 'a', objL]
  ]

  return {
    argss: sets,
    type: `object_${TYPE_100K}`
  }
}
