import defaultTo from '../../cjs/defaultTo'

test('return default value (first argument), if value (second argument) is null, undefined or NaN', () => {
  const defaultTo42 = defaultTo(42)

  expect(defaultTo42(null)).toBe(42)
  expect(defaultTo42(undefined)).toBe(42)
  expect(defaultTo42(NaN)).toBe(42)
  expect(defaultTo42(43)).toBe(43)
  expect(defaultTo42(false)).toBe(false)
})
