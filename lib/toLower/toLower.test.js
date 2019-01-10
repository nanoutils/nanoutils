import toLower from '.'

it('returns lower case version of string', () => {
  expect(toLower('NANOUTILS')).toBe('nanoutils')
})
