import unless from '.'

var getEven = unless(i => i % 2 === 0, i => i + 1)

test('applies callback if condition is false', () => {
  expect(getEven(1)).toBe(2)
})

test('returns passed value if condition is true', () => {
  expect(getEven(2)).toBe(2)
})
