import tap from '.'

test('no tests yet', () => {
  const cb = a => {
    expect(a).toBe(1)
  }
  expect(tap(cb)(1)).toBe(1)
})
