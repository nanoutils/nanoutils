import snakeCase from '../../cjs/snakeCase'

const EXPECTED_VALUE = 'foo_bar'

it('makes all letter lower case', () => {
  expect(snakeCase('FOO_BAR')).toEqual(EXPECTED_VALUE)
  expect(snakeCase('foo--bar')).toEqual(EXPECTED_VALUE)
  expect(snakeCase('Foo Bar')).toEqual(EXPECTED_VALUE)
})

it('takes upper letters into account', () => {
  expect(snakeCase('fooBar')).toEqual(EXPECTED_VALUE)
})

it('searches for different separators and join them as one', () => {
  expect(snakeCase('__FOO___BAR__')).toEqual(EXPECTED_VALUE)
  expect(snakeCase('-foo--bar-')).toEqual(EXPECTED_VALUE)
  expect(snakeCase('Foo Bar')).toEqual(EXPECTED_VALUE)
})
