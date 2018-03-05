import insert from '.'

test('inserts element into the specified position in the list ', () => {
  expect(insert(2, 'x', [1, 2, 3, 4])).toEqual([1, 2, 'x', 3, 4])
})
