import pick from '.'

test('returns object with picked properties', () => {
  expect(pick(['a', 'b'], { a: 1, b: 2, c: 3 })).toEqual({ a: 1, b: 2 })
})

test('ignores missed properties', () => {
  const obj = pick(['a', 'b'], { a: 1, c: 3 })
  expect(Object.keys(obj).length).toBe(1)
})
