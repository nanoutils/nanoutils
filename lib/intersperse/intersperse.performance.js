module.exports = function() {
  var length = 1000000
  var list1 = []
  var list2 = []
  var list3 = []
  var separator = 'a'

  for (var i = 0; i < length; i++) {
    if (i < length / 100) list1.push('a')
    if (i < length / 10) list2.push('a')
    list3.push('a')
  }

  var sets = [
    [separator, list1],
    [separator, list2],
    [separator, list3]
  ]

  return {
    type: 'array_size',
    argss: sets
  }
}
