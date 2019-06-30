import unnest from '../../cjs/unnest'

it('returns one level of nesting', () => {
  const val = unnest([1, [2, 3], [[4, [5]], 6]])
  expect(val).toEqual([1, 2, 3, [4, [5]], 6])
})

it('returns empty array for another data structures', () => {
  const val = unnest(null)
  expect(val).toEqual([])
})
