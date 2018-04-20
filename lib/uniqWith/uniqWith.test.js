import uniqWith from '.'

test('returns new list, containing only one copy of each element based on predicate comparison. All items compared pairly. First item is prefered', () => {
  const list = [1, 2, '1', 4]
  const compare = (a, b) => a + '' === b + ''
  expect(uniqWith(compare, list)).toEqual([1, 2, 4])
})
