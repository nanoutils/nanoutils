import insertAll from '../../cjs/insertAll'

test('inserts element as array into the specified position in the list ', () => {
  expect(insertAll(2, ['x'], [1, 2, 3, 4])).toEqual([1, 2, 'x', 3, 4])
})

test('inserts all element into the specified position in the list ', () => {
  expect(insertAll(2, [3, 4], [1, 2, 5, 6])).toEqual([1, 2, 3, 4, 5, 6])
})
