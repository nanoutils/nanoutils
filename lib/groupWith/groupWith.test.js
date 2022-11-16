import groupWith from '../../cjs/groupWith'

test('returns list of a list where each sublist contains all predicate satisfied items, and only adjacent elements are compared', () => {
  const predicate1 = (a, b) => a === b
  const list1 = [1, 1, 1, 2, 2, 3, 4, 5, 1, 2]

  const predicate2 = (a, b) => Math.abs(a) === Math.abs(b)
  const list2 = [1, -1, 2, 3, -3]

  expect(groupWith(predicate1, list1)).toEqual([
    [1, 1, 1],
    [2, 2],
    [3],
    [4],
    [5],
    [1],
    [2],
  ])
  expect(groupWith(predicate2, list2)).toEqual([[1, -1], [2], [3, -3]])
})

test('returns empty array, if empty array or not array is provided', () => {
  const predicate = (a, b) => a === b
  expect(groupWith(predicate, [])).toEqual([])
  expect(groupWith(predicate, 1)).toEqual([])
})
