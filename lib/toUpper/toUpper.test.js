import toUpper from '.'

test("returns upper case version of a string", () => {
  expect(toUpper('nanoutils')).toBe('NANOUTILS')
})
