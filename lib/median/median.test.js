import median from '.'

test('calculates median of the given list of numbers', () => {
  expect(median([2, 9, 7])).toBe(7)
  expect(median([7, 2, 10, 9])).toBe(8)
})
