import eqProps from '.'

test('compares two props of objects and returns their equality', () => {
  const common = { a: 1 }
  const obj1 = { b: 1, c: 2, d: common, f: 3 }
  const obj2 = { b: 1, c: 20, d: common }

  expect(eqProps('b', obj1, obj2)).toBeTruthy()
  expect(eqProps('c')(obj1, obj2)).toBeFalsy()
  expect(eqProps('d', obj1)(obj2)).toBeTruthy()
  expect(eqProps('f', obj1, obj2)).toBeFalsy()
  expect(eqProps('fff', obj1, obj2)).toBeTruthy()
})
