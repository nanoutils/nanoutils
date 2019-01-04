import median from '.'

it('calculates median for the given array of numbers', () => {
  expect(median([2, 9, 7])).toBe(7)
  expect(median([7, 2, 10, 9])).toBe(8)
})

it('returns NaN for empty array', () => {
  expect(median([])).toBeNaN()
})
