import flatten from '../../cjs/flatten'

test('applies flatten until array is flat', () => {
  const val = flatten([1, [2, 3], [[4, [5]], 6]])
  expect(val).toEqual([1, 2, 3, 4, 5, 6])
})
