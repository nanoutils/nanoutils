import mergeDeepWithKey from '.'

test('merge objects recursively, applies function to repeating keys values with key itself and passing result to new object', () => {
  const a = { a: 1, b: { c: 1, d: [1, 2] } }
  const b = { e: 2, b: { c: 2, d: [3, 4] } }
  const func = (key, a, b) => (
    key === 'c'
      ? b
      : a.concat(b)
  )

  expect(mergeDeepWithKey(func, a, b)).toMatchObject({ a: 1, e: 2, b: { c: 2, d: [1, 2, 3, 4] } })
})
