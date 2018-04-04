const { types: { TYPE_100K } } = require('../_internal/helpers/performance')

module.exports = function() {
  var obj1 = {}
  var obj2 = {}
  var obj3 = {}
  var length = 100000

  for (var i = 0; i < length; i++) {
    if (i < length / 100) obj1[i] = 'a'
    if (i < length / 10) obj2[i] = 'a'
    obj3[i] = 'a'
  }

  var sets = [
    [obj1],
    [obj2],
    [obj3]
  ]

  return {
    argss: sets,
    type: `object_${TYPE_100K}`
  }
}
