import binary from '.'

test('creates binary function from passed one', () => {
  expect(binary((a, b, c = 0) => a + b + c)(1, 2, 3)).toBe(3)
})
