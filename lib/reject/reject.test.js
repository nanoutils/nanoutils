import reject from '.'

const isEven = value => value % 2 === 0

it('rejects unnecessary values from arrays', () => {
  expect(reject(isEven, [1, 2, 3, 4])).toEqual([1, 3])
})

it('rejects unnecessary values from objects', () => {
  expect(reject(isEven, { a: 1, b: 2, c: 3, d: 4 })).toEqual({ a: 1, c: 3 })
})
