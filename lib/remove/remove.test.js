import remove from '.'

test('removes sub-list from start index and containing count elements', () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  expect(remove(4, 3, list)).toEqual([1, 2, 3, 4, 8, 9, 10])
})

test('does not mutate original array, return new copy', () => {
  const list = [1, 2, 3]
  const result = remove(1, 1, list)

  expect(result).toEqual([1, 3])
  expect(result !== list).toBeTruthy()
})
