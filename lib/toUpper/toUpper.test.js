var toUpper = require('.')

test("returns upper case version of a string", () => {
  expect(toUpper('nanoutils')).toBe('NANOUTILS')
})
