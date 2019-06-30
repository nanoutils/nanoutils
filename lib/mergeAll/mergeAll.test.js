import mergeAll from '../../cjs/mergeAll'

it('merges an array of objects', () => {
  const list = [{ a: 1 }, { b: 2 }, { c: 3 }]
  expect(mergeAll(list)).toMatchObject({ a: 1, b: 2, c: 3 })
})

it('uses last met value in a case of repeating keys', () => {
  const list = [{ a: 1 }, { b: 2 }, { a: 2 }, { a: 3 }]
  expect(mergeAll(list)).toMatchObject({ a: 3, b: 2 })
})
