import symmetricDifference from '.'

test('it excludes common elements', () => {
  const list1 = [1, 2, 3, 4, 5]
  const list2 = [3, 4, 5, 6, 7]

  expect(symmetricDifference(list1, list2)).toEqual([1, 2, 6, 7])
})

test('it excludes repeated elements', () => {
  const list1 = [1, 1, 2, 2]
  const list2 = [2, 2, 3, 3]

  expect(symmetricDifference(list1, list2)).toEqual([1, 3])
})

test('it unites arrays if no elements are common', () => {
  const list1 = [1, 2]
  const list2 = [3, 4]

  expect(symmetricDifference(list1, list2)).toEqual([1, 2, 3, 4])
})

test('checks equality according to \'equals\' method', () => {
  const list1 = [1, 2, { a: 1 }]
  const list2 = [3, 4, { a: 1 }]

  expect(symmetricDifference(list1, list2)).toEqual([1, 2, 3, 4])
})
