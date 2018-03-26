module.exports = function() {
  var obj1 = {}
  var obj2 = {}
  var obj3 = {}
  var length = 10000

  for (var i = 0; i < length; i++) {
    obj1[i] = 'a'
    if (i < length / 2) obj2[i] = 'a'
    else obj2[i] = i
    obj3[i] = i
  }

  var sets = [
    [obj1], // all values are equal
    [obj2], // 50% of equal values
    [obj3] // no equal values
  ]

  return {
    argss: sets,
    type: 'object_size_1e4'
  }
}
