import pathSatisfies from '.'

const func = (x) => x % 2 === 0
const a = { a: { b: 2 } }
const b = { a: { b: 3 } }

it('returns true if predicate returns true', () => {
  expect(pathSatisfies(func, ['a', 'b'], a)).toBeTruthy()
})

it('returns false if predicate returns false', () => {
  expect(pathSatisfies(func, ['a', 'b'], b)).toBeFalsy()
  expect(pathSatisfies(func, ['a', 'b', 'c'], a)).toBeFalsy()
})
