import startsWith from '../../cjs/startsWith'

it('checks if string or array starts with provided value', () => {
  expect(startsWith('a', 'abc')).toBeTruthy()
  expect(startsWith('ab', 'abc')).toBeTruthy()
  expect(startsWith('b', 'abc')).toBeFalsy()

  expect(startsWith(['a'], ['a', 'b', 'c'])).toBeTruthy()
  expect(startsWith(['a', 'b'], ['a', 'b', 'c'])).toBeTruthy()
  expect(startsWith(['b'], ['a', 'b', 'c'])).toBeFalsy()

  expect(startsWith('a', ['a', 'b', 'c'])).toBeFalsy()
})
