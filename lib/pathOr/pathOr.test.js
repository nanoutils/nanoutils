import pathOr from '.'

it('returns value by a specified path', () => {
  const a = { a: { b: 2 } }

  expect(pathOr('default', ['a', 'b'], a)).toBe(2)
})

it('returns default value if a value for a given path is not defined or undefined', () => {
  const a = { a: { b: 2 }, c: undefined }

  expect(pathOr('default', ['a', 'b', 'c'], a)).toBe('default')
  expect(pathOr('default', ['c'], a)).toBe('default')
})
