import without from '.'

it('returns new array without values in the first argument', () => {
  const val = without([1, 2], [1, 2, 1, 3, 4])
  expect(val).toEqual([3, 4])
})
