import pathSatisfies from '.'

test('returns true if the specified object property at given path satisfies the given predicate; false otherwise.', () => {
  const func = (x) => x % 2 === 0
  const a = { a: { b: 2 } }
  const b = { a: { b: 3 } }

  expect(pathSatisfies(func, ['a', 'b'], a)).toBeTruthy()
  expect(pathSatisfies(func, ['a', 'b'], b)).toBeFalsy()
  expect(pathSatisfies(func, ['a', 'b', 'c'], a)).toBeFalsy()
})
