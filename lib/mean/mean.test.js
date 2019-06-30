import mean from '../../cjs/mean'

it('returns mean of numbers', () => {
  expect(mean([2, 7, 9])).toBe(6)
})

it('returns NaN for empty array', () => {
  expect(mean([])).toBeNaN()
})
