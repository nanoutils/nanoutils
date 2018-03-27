import keys from '.'

test('returns list of all enumerable own properties', () => {
  const proto = { a: 1 }
  const obj = { b: 2, c: 3, d: 4, __proto__: proto }

  expect(keys(obj)).toEqual(['b', 'c', 'd'])
})
