import toArray from '.'

test('should create array from any values with .slice method', () => {
  // TODO: HTML collections etc
  var a = function() {
    return toArray(arguments)
  }
  var b = toArray([1, 2, 3])
  var c = toArray('123')
  expect(a(1, 2, 3)).toEqual([1, 2, 3])
  expect(b).toEqual([1, 2, 3])
  expect(c).toEqual(['1', '2', '3'])
})
