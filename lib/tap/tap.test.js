import tap from '.'

test('applies callback and returns argument', () => {
  const cb = a => {
    expect(a).toBe(1)
  }
  expect(tap(cb)(1)).toBe(1)
})
