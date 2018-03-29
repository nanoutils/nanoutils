import startsWith from '.'

test('checks if string or list starts with provided value', () => {
  expect(startsWith('a', 'abc')).toBeTruthy()
  expect(startsWith('ab', 'abc')).toBeTruthy()
  expect(startsWith('b', 'abc')).toBeFalsy()

  expect(startsWith(['a'], ['a', 'b', 'c'])).toBeTruthy()
  expect(startsWith(['b'], ['a', 'b', 'c'])).toBeFalsy()
  expect(startsWith('a', ['a', 'b', 'c'])).toBeFalsy()
})
