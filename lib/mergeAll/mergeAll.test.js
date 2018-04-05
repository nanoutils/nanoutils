import mergeAll from '.'

test('merges all objects from list in one', () => {
  const list = [{ a: 1 }, { b: 2 }, { c: 3 }]
  expect(mergeAll(list)).toMatchObject({ a: 1, b: 2, c: 3 })
})

test('in a case of repeating keys, last met value is used', () => {
  const list = [{ a: 1 }, { b: 2 }, { a: 2 }, { a: 3 }]
  expect(mergeAll(list)).toMatchObject({ a: 3, b: 2 })
})
