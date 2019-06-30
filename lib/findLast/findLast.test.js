import findLast from '../../cjs/findLast'

const fn = (x) => x % 2 === 0

test('returns the last item from list that matches the predicate', () => {
  expect(findLast(fn, [1, 3, 6, 10, 13, 22])).toBe(22)
  expect(findLast(fn)([1, 3, 6, 10, 13, 22])).toBe(22)
})

test('returns undefined if no element matched predicate', () => {
  expect(findLast(fn, [1, 3, 13])).toBe(undefined)
  expect(findLast(fn)([1, 3, 13])).toBe(undefined)
})
