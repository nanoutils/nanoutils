import toUpper from '../../cjs/toUpper'

it('returns upper case version of a string', () => {
  expect(toUpper('nanoutils')).toBe('NANOUTILS')
})
