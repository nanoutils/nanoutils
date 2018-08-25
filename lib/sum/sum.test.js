import sum from '.'

test('returns sum of all numbers', () => {
  expect(sum([1, 2, 3, -4])).toEqual(2)
})
