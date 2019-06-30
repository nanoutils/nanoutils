import length from '../../cjs/length'

test('returns length of supplied value', () => {
  expect(length([])).toBe(0)
  expect(length([1, 2, 3])).toBe(3)
  expect(length('nano')).toBe(4)
  expect(length(x => x)).toBe(1)
})

test('if value does not have length prop, returns NaN', () => {
  expect(length(undefined)).toBe(NaN)
  expect(length(null)).toBe(NaN)
  expect(length({})).toBe(NaN)
  expect(length(1)).toBe(NaN)
  expect(length(false)).toBe(NaN)
})
