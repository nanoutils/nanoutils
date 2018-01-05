var flattenDeep = require('.')

test('applies flatten until array is flat', () => {
  const val = flattenDeep([1, [2, 3], [[4, [5]], 6]])
  expect(val).toEqual([1, 2, 3, 4, 5, 6])
})
