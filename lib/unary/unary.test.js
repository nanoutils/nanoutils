import unary from '.'

test('creates a unary function from passed one', () => {
  expect(unary((a, b = 0) => a + b)(1, 2)).toBe(1)
})
