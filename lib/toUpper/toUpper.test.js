import toUpper from '.'

it('returns upper case version of a string', () => {
  expect(toUpper('nanoutils')).toBe('NANOUTILS')
})
