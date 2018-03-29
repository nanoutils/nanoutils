import symmetricDifference from '.'

test('it excludes common elements', () => {
  const list1 = [1, 2, 3, 4, 5]
  const list2 = [3, 4, 5, 6, 7]

  expect(symmetricDifference(list1, list2)).toEqual([1, 2, 6, 7])
})

test('it unites arrays if no elements are common', () => {
  const list1 = [1, 2]
  const list2 = [3, 4]

  expect(symmetricDifference(list1, list2)).toEqual([1, 2, 3, 4])
})
