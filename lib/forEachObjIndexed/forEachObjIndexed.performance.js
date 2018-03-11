module.exports = function() {
  const length = 100000
  const obj1 = {}
  const obj2 = {}
  const obj3 = {}

  const func = (val, key, obj) => { obj[key] = val + ' ' }

  for (var i = 0; i < length; i++) {
    if (i < 100) obj1[i] = i
    if (i < 1000) obj2[i] = i
    obj3[i] = i
  }

  const sets = [
    [func, obj1],
    [func, obj2],
    [func, obj3]
  ]

  return {
    argss: sets,
    type: 'object_size'
  }
}
