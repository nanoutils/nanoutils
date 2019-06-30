import camelCase from '../../cjs/camelCase'

const EXPECTED_VALUE = 'fooBar'

test('it makes all letter lower case expect for first letter between words', () => {
  expect(camelCase('FOO_BAR')).toEqual(EXPECTED_VALUE)
  expect(camelCase('foo--bar')).toEqual(EXPECTED_VALUE)
  expect(camelCase('Foo Bar')).toEqual(EXPECTED_VALUE)
})

test('it takes upper letters into account', () => {
  expect(camelCase('fooBar')).toEqual(EXPECTED_VALUE)
})

test('it searches for different separators', () => {
  expect(camelCase('__FOO___BAR__')).toEqual(EXPECTED_VALUE)
  expect(camelCase('-foo--bar-')).toEqual(EXPECTED_VALUE)
  expect(camelCase('Foo Bar')).toEqual(EXPECTED_VALUE)
})
