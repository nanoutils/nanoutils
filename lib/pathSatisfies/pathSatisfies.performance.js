const { generateNestedObjects, generateArrays, types: { TYPE_100K }, times: { TIME_100K } } = require('../_internal/helpers/performance')

module.exports = function() {
  const [objS, objM, objL] = generateNestedObjects(TIME_100K)
  const [pathS, pathM, pathL] = generateArrays(TIME_100K, i => i)
  const func = x => typeof x === 'object'

  return {
    type: `object_${TYPE_100K}`,
    argss: [
      [func, pathS.reverse(), objS],
      [func, pathM.reverse(), objM],
      [func, pathL.reverse(), objL]
    ]
  }
}
