import findLastIndex from '../../cjs/findLastIndex'

const fn = (x) => x % 2 === 0

test('returns the first item index from list that matches the predicate', () => {
  expect(findLastIndex(fn, [1, 3, 6, 10, 13, 22])).toBe(5)
  expect(findLastIndex(fn)([1, 3, 6, 10, 13, 22])).toBe(5)

  expect(findLastIndex(fn, [1, 3, 6, 10, 13, 22, 23, 25, 27])).toBe(5)
})

test('returns -1 if no element matched predicate', () => {
  expect(findLastIndex(fn, [1, 3, 13])).toBe(-1)
  expect(findLastIndex(fn)([1, 3, 13])).toBe(-1)
})
