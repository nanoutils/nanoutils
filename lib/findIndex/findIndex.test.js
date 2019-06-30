import findIndex from '../../cjs/findIndex'

const fn = (x) => x % 2 === 0

test('returns the first item index from list that matches the predicate', () => {
  expect(findIndex(fn, [1, 3, 6, 10, 13])).toBe(2)
  expect(findIndex(fn)([1, 3, 6, 10, 13])).toBe(2)
})

test('returns -1 if no element matched predicate', () => {
  expect(findIndex(fn, [1, 3, 13])).toBe(-1)
  expect(findIndex(fn)([1, 3, 13])).toBe(-1)
})
