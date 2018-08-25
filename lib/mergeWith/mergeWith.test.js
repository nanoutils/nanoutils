import mergeWith from '.'

test('merges object with custom strategy defined in callback', () => {
  const a = { a: true, values: [10, 20] }
  const b = { b: true, values: [15, 35] }
  expect(mergeWith((a, b) => a.concat(b), a, b)).toEqual({
    a: true,
    b: true,
    values: [10, 20, 15, 35]
  })
})
