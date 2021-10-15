import splitEvery from '../../cjs/splitEvery'

it('splits an array into slices of specified length', () => {
  expect(splitEvery(3, [1, 2, 3, 4, 5, 6, 7])).toEqual([
    [1, 2, 3],
    [4, 5, 6],
    [7],
  ])
  expect(splitEvery(3, [1, 2, 3, 4, 5, 6])).toEqual([
    [1, 2, 3],
    [4, 5, 6],
  ])
})

it('returns empty array for empty array', () => {
  expect(splitEvery(3, [])).toEqual([])
})

it('returns an empty array if a number is negative', () => {
  expect(splitEvery(-3, [1, 2, 3, 4, 5])).toEqual([])
})

it('works with strings', () => {
  expect(splitEvery(3, 'foobarbaz')).toEqual(['foo', 'bar', 'baz'])
})
