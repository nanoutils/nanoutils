import uniqBy from '.'

test('returns the list with all duplicated values filtered according to \'equals\'. Values compared with predicate applied to them,', () => {
  const list = [1, -1, 2, -2]
  expect(uniqBy(Math.abs, list)).toEqual([1, 2])
})
