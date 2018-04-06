import propEq from '.'

test('returns boolean value, if provided prop in object is equals to value, according to \'equals\' method ', () => {
  const a = { a: 1, b: { c: 3 } }
  const b = { a: 2, b: { c: 4 } }

  expect(propEq('b', { c: 3 }, a)).toBeTruthy()
  expect(propEq('b', { c: 3 }, b)).toBeFalsy()
})
