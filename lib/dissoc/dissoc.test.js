import dissoc from '.'

test('returns object, that does not contain provided prop', () => {
  expect(dissoc('a', { a: 1, b: 2, c: 3 })).toMatchObject({ b: 2, c: 3 })
})

test('returns new copy of object, but all props are shallow copied', () => {
  const a = { a: 1, b: {} }
  const b = dissoc('a', a)

  expect(a === b).toBeFalsy()
  expect(a.b === b.b).toBeTruthy()
})

test('function affects on prototype props too', () => {
  const proto = { a: 1 }
  const a = { b: 2, __proto__: proto }
  const b = dissoc('a', a)

  expect(a === b).toBeFalsy()
  expect(Object.getPrototypeOf(a) === Object.getPrototypeOf(b)).toBeFalsy()
  expect('a' in a).toBeTruthy()
  expect('a' in b).toBeFalsy()
})

test('returns same object if a field is not in an object', () => {
  const withoutPropA = dissoc('a')

  expect(withoutPropA({ b: 2 })).toEqual({ b: 2 })
})
