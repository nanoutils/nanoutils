import identity from '.'

test('returns value', () => {
  expect(identity(1)).toBe(1)
})
