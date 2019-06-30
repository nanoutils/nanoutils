import toLower from '../../cjs/toLower'

it('returns lower case version of string', () => {
  expect(toLower('NANOUTILS')).toBe('nanoutils')
})
