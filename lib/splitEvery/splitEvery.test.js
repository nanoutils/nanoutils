import splitEvery from '.'

test('splits a list into slices of specified length', () => {
  expect(splitEvery(3, [1, 2, 3, 4, 5, 6, 7])).toEqual([
    [1, 2, 3],
    [4, 5, 6],
    [7]
  ])
})

test('works with strings', () => {
  expect(splitEvery(3, 'foobarbaz')).toEqual(['foo', 'bar', 'baz'])
})
