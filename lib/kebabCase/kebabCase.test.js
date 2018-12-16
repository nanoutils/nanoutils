import camelCase from '.'

const EXPECTED_VALUE = 'foo-bar'

it('makes all letter lower case', () => {
  expect(camelCase('FOO_BAR')).toEqual(EXPECTED_VALUE)
  expect(camelCase('foo--bar')).toEqual(EXPECTED_VALUE)
  expect(camelCase('Foo Bar')).toEqual(EXPECTED_VALUE)
})

it('takes upper letters into account', () => {
  expect(camelCase('fooBar')).toEqual(EXPECTED_VALUE)
})

it('searches for different separators', () => {
  expect(camelCase('__FOO___BAR__')).toEqual(EXPECTED_VALUE)
  expect(camelCase('-foo--bar-')).toEqual(EXPECTED_VALUE)
  expect(camelCase('Foo Bar')).toEqual(EXPECTED_VALUE)
})

it('removes incorrect symbols', () => {
  expect(camelCase('__<FOO>___BAR__')).toEqual(EXPECTED_VALUE)
  expect(camelCase('__«FOO»___BAR__')).toEqual(EXPECTED_VALUE)
})
