import find from '.'

const isEven = value => value % 2 === 0

test('returns the first item from list that matches the predicate', () => {
  expect(find(isEven, [1, 3, 6, 10, 13])).toBe(6)
  expect(find(isEven)([1, 3, 6, 10, 13])).toBe(6)
})

test('returns undefined if no element matched predicate', () => {
  expect(find(isEven, [1, 3, 13])).toBe(undefined)
  expect(find(isEven)([1, 3, 13])).toBe(undefined)
})
