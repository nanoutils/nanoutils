import sum from '.'

it('returns 0 if array is empty', () => {
  expect(sum([])).toBe(0)
})

it('returns sum of all numbers', () => {
  expect(sum([1, 2, 3, -4])).toBe(2)
})
