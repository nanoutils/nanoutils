import addIndex from '../addIndex'
import map from '../map'
import filter from '../filter'

test('add index with map', () => {
  const array = [1, 2, 3, 4]
  expect(addIndex(map, (v, i) => v + i, array)).toEqual([1, 3, 5, 7])
  expect(addIndex(map)((v, i) => v + i, array)).toEqual([1, 3, 5, 7])
})

test('add index with filter', () => {
  const array = [1, 5, 3, 7]
  expect(addIndex(filter, (v, i) => (v + i) % 2 === 1, array)).toEqual([1, 3])
  expect(addIndex(filter)((v, i) => (v + i) % 2 === 1, array)).toEqual([1, 3])
})

test('add index doesn\'t mutate an array', () => {
  const array = [1, 2, 3, 4]
  expect(addIndex(map, (v, i) => v + i, array)).toEqual([1, 3, 5, 7])
  expect(addIndex(map)((v, i) => v + i, array)).toEqual([1, 3, 5, 7])
  expect(array).toEqual([1, 2, 3, 4])
})