var unnest = require('.')

test('returns one level of nesting', () => {
  const val = unnest([1, [2, 3], [[4, [5]], 6]])
  expect(val).toEqual([1, 2, 3, [4, [5]], 6])
})

test('returns empty array for another data structures', () => {
  const val = unnest(null)
  expect(val).toEqual([])
})
