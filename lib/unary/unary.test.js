import unary from '.'

it('passes exactly one parameter to a function', () => {
  expect(unary((a, b = 0) => a + b)(1, 2)).toBe(1)
})
