import snakeCase from '.'

const EXPECTED_VALUE = 'foo_bar'

test('it makes all letter lower case', () => {
  expect(snakeCase('FOO_BAR')).toEqual(EXPECTED_VALUE)
  expect(snakeCase('foo--bar')).toEqual(EXPECTED_VALUE)
  expect(snakeCase('Foo Bar')).toEqual(EXPECTED_VALUE)
})

test('it takes upper letters into account', () => {
  expect(snakeCase('fooBar')).toEqual(EXPECTED_VALUE)
})

test('it searches for different separators and join ', () => {
  expect(snakeCase('__FOO___BAR__')).toEqual(EXPECTED_VALUE)
  expect(snakeCase('-foo--bar-')).toEqual(EXPECTED_VALUE)
  expect(snakeCase('Foo Bar')).toEqual(EXPECTED_VALUE)
})
