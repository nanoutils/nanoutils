import mean from '.'

test('returns mean of numbers', () => {
  expect(mean([2, 7, 9])).toEqual(6)
})

test('returns NaN for empty array', () => {
  expect(mean([])).toEqual(NaN)
})
