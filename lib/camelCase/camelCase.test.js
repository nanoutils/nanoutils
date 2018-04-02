import camelCase from '.'

test('it makes all letter lower case expect for first letter between words', () => {
  const EXPECTED_VALUE = 'fooBar'
  expect(camelCase('FOO_BAR')).toEqual(EXPECTED_VALUE)
  expect(camelCase('foo--bar')).toEqual(EXPECTED_VALUE)
  expect(camelCase('Foo Bar')).toEqual(EXPECTED_VALUE)
  expect(camelCase('fOO bAR')).toEqual(EXPECTED_VALUE)
})

test('it doesn\'t take upper letters into account', () => {
  expect(camelCase('fooBar')).toEqual('foobar')
})

test('it searchs for different separators', () => {
  const EXPECTED_VALUE = 'fooBar'
  expect(camelCase('__FOO___BAR__')).toEqual(EXPECTED_VALUE)
  expect(camelCase('-foo--bar-')).toEqual(EXPECTED_VALUE)
  expect(camelCase('Foo Bar')).toEqual(EXPECTED_VALUE)
})
