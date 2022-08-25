import pascalCase from '../../cjs/pascalCase'

const EXPECTED_VALUE = 'FooBar'

it('should makes all letter lower case expect for first letter', () => {
  expect(pascalCase('FOO_BAR')).toEqual(EXPECTED_VALUE)
  expect(pascalCase('foo--bar')).toEqual(EXPECTED_VALUE)
  expect(pascalCase('Foo Bar')).toEqual(EXPECTED_VALUE)
})

it('should convert other word cases', () => {
  expect(pascalCase('fooBar')).toEqual(EXPECTED_VALUE)
  expect(pascalCase('FooBar')).toEqual(EXPECTED_VALUE)
  expect(pascalCase('foo-bar')).toEqual(EXPECTED_VALUE)
  expect(pascalCase('foo_bar')).toEqual(EXPECTED_VALUE)
})

it('should searches for different separators', () => {
  expect(pascalCase('__FOO___BAR__')).toEqual(EXPECTED_VALUE)
  expect(pascalCase('-foo--bar-')).toEqual(EXPECTED_VALUE)
  expect(pascalCase('Foo Bar')).toEqual(EXPECTED_VALUE)
})

it('should removes incorrect symbols', () => {
  expect(pascalCase('__<FOO>___BAR__')).toEqual(EXPECTED_VALUE)
  expect(pascalCase('__«FOO»___BAR__')).toEqual(EXPECTED_VALUE)
})
