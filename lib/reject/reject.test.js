import reject from '.'

test('rejects unnecessary values from arrays', () => {
  var isEven = i => i % 2 === 0
  expect(reject(isEven, [1, 2, 3, 4])).toEqual([1, 3])
})

test('rejects unnecessary values from objects', () => {
  var isEven = i => i % 2 === 0
  expect(reject(isEven, { a: 1, b: 2, c: 3, d: 4 })).toEqual({ a: 1, c: 3 })
})
