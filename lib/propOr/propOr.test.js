import propOr from '.'

test('returns own property value of object, otherwise returns provided default value', () => {
  const proto = { a: 1 }
  const a = { b: 2, __proto__: proto }

  expect(propOr('default', 'b', a)).toBe(2)
  expect(propOr('default', 'c', a)).toBe('default')
  expect(propOr('default', 'a', a)).toBe('default')
})
