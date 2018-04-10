import match from '.'

test('returns array of matched substrings', () => {
  expect(match(/[a-z]a/g, 'banana')).toEqual(['ba', 'na', 'na'])
})

test('returns empty array if no matches', () => {
  expect(match(/[a-z]b/g, 'banana')).toEqual([])
})
