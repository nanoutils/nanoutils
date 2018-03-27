import keysIn from '.'

test('returns list of all enumerable own and prototype properties', () => {
  const proto = { a: 1 }
  const obj = { b: 2, c: 3, d: 4, __proto__: proto }

  expect(keysIn(obj)).toEqual(['b', 'c', 'd', 'a'])
})
