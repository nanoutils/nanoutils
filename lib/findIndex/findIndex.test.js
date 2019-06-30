import findeIndex from '../../cjs/findeIndex'

const fn = (x) => x % 2 === 0

test('returns the first item index from list that matches the predicate', () => {
  expect(findeIndex(fn, [1, 3, 6, 10, 13])).toBe(2)
  expect(findeIndex(fn)([1, 3, 6, 10, 13])).toBe(2)
})

test('returns -1 if no element matched predicate', () => {
  expect(findeIndex(fn, [1, 3, 13])).toBe(-1)
  expect(findeIndex(fn)([1, 3, 13])).toBe(-1)
})
