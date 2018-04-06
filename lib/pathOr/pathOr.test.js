import pathOr from '.'

test('returns objects retreived value by path, or provided default value in a case of non-existing path', () => {
  const a = { a: { b: 2 }, c: undefined }

  expect(pathOr('default', ['a', 'b'], a)).toBe(2)
  expect(pathOr('default', ['a', 'b', 'c'], a)).toBe('default')
  expect(pathOr('default', ['b'], a)).toBe('default')
  expect(pathOr('default', ['c'], a)).toBe('default')
})
