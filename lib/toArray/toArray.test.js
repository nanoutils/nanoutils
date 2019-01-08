import toArray from '.'

it('uses slice-method to create array from anything', () => {
  // TODO: HTML collections etc
  var a = function() { return toArray(arguments) }
  expect(a(1, 2, 3)).toEqual([1, 2, 3])
  expect(toArray([1, 2, 3])).toEqual([1, 2, 3])
  expect(toArray('123')).toEqual(['1', '2', '3'])
})
