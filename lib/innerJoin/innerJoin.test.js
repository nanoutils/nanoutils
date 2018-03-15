import innerJoin from '.'

const func = (record, item) => record.id === item

test('returns new list of items, that matches provided comparing function', () => {
  const list = [{ id: 1 }, { id: 2 }, { id: 3 }]
  const checkList = [1, 2]

  expect(innerJoin(func, list, checkList)).toEqual([{ id: 1 }, { id: 2 }])
  expect(innerJoin(func, list)(checkList)).toEqual([{ id: 1 }, { id: 2 }])
  expect(innerJoin(func)(list)(checkList)).toEqual([{ id: 1 }, { id: 2 }])
})

test('returned list could contain duplicates', () => {
  const list = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 2 }]
  const checkList = [1, 2]

  expect(innerJoin(func, list, checkList)).toEqual([{ id: 1 }, { id: 2 }, { id: 2 }])
})
