import when from '.'

var getEven = when(i => i % 2 === 1, i => i + 1)

test('applies callback if condition is true', () => {
  expect(getEven(1)).toBe(2)
})

test('returns passed value if condition is false', () => {
  expect(getEven(2)).toBe(2)
})
