var toLower = require('.')

test("returns lower case version of string", () => {
  expect(toLower('NANOUTILS')).toBe('nanoutils')
})
