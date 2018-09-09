import splitEvery from '.'

test('splits an array into slices of specified length', () => {
  expect(splitEvery(3, [1, 2, 3, 4, 5, 6, 7])).toEqual([
    [1, 2, 3],
    [4, 5, 6],
    [7]
  ])
  expect(splitEvery(3, [1, 2, 3, 4, 5, 6])).toEqual([
    [1, 2, 3],
    [4, 5, 6]
  ])
})

test('splits an empty array into an empty list', () => {
  expect(splitEvery(3, [])).toEqual([])
})

test('returns an empty array if a number is negative', () => {
  expect(splitEvery(-3, [1, 2, 3, 4, 5])).toEqual([])
})

test('works with strings', () => {
  expect(splitEvery(3, 'foobarbaz')).toEqual(['foo', 'bar', 'baz'])
})
