import pick from '.'

test('returns object with picked properties', () => {
  expect(pick(['a', 'b'], { a: 1, b: 2, c: 3 })).toEqual({ a: 1, b: 2 })
})

test('ignores missed properties', () => {
  const obj = pick(['a', 'b'], { a: 1, c: 3 })
  expect(Object.keys(obj).length).toBe(1)
})

test('picks even falsy properties', () => {
  const obj = { a: false, b: 0, c: undefined, d: null, e: '' }

  expect(pick(Object.keys(obj), obj)).toMatchObject(obj)
})
