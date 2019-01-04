import kebabCase from '.'

const EXPECTED_VALUE = 'foo-bar'

it('makes all letter lower case', () => {
  expect(kebabCase('FOO_BAR')).toEqual(EXPECTED_VALUE)
  expect(kebabCase('foo--bar')).toEqual(EXPECTED_VALUE)
  expect(kebabCase('Foo Bar')).toEqual(EXPECTED_VALUE)
})

it('takes upper letters into account', () => {
  expect(kebabCase('fooBar')).toEqual(EXPECTED_VALUE)
})

it('searches for different separators', () => {
  expect(kebabCase('__FOO___BAR__')).toEqual(EXPECTED_VALUE)
  expect(kebabCase('-foo--bar-')).toEqual(EXPECTED_VALUE)
  expect(kebabCase('Foo Bar')).toEqual(EXPECTED_VALUE)
})

it('removes incorrect symbols', () => {
  expect(kebabCase('__<FOO>___BAR__')).toEqual(EXPECTED_VALUE)
  expect(kebabCase('__«FOO»___BAR__')).toEqual(EXPECTED_VALUE)
})
