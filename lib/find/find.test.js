import find from '.'

const fn = (x) => x % 2 === 0

test('returns the first item from list that matches the predicate', () => {
  expect(find(fn, [1, 3, 6, 10, 13])).toBe(6)
  expect(find(fn)([1, 3, 6, 10, 13])).toBe(6)
})

test('returns undefined if no element matched predicate', () => {
  expect(find(fn, [1, 3, 13])).toBe(undefined)
  expect(find(fn)([1, 3, 13])).toBe(undefined)
})
