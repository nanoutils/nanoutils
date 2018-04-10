import propSatisfies from '.'

test('returns true if object prop satisfies given predicate, false otherwise', () => {
  const func = x => x % 2 === 0
  const obj = { a: 1, b: 2 }

  expect(propSatisfies(func, 'a', obj)).toBeFalsy()
  expect(propSatisfies(func, 'b', obj)).toBeTruthy()
})
