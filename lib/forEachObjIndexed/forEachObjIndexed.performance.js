const {
  types: { TYPE_100K },
} = require('../_internal/helpers/performance')

module.exports = function getObject() {
  const length = 100000
  const obj1 = {}
  const obj2 = {}
  const obj3 = {}

  const func = (val, key, obj) => {
    obj[key] = val + ' '
  }

  for (var i = 0; i < length; i++) {
    if (i < 1000) obj1[i] = i
    if (i < 10000) obj2[i] = i
    obj3[i] = i
  }

  return {
    type: `object_${TYPE_100K}`,
    argss: [
      [func, obj1],
      [func, obj2],
      [func, obj3],
    ],
  }
}
