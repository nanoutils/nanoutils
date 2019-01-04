import pickBy from '.'

it('filters an object by predicate applied to its values', () => {
  const isOdd = i => i % 2 === 0
  expect(pickBy(isOdd, { a: 1, b: 2, c: 3, d: 4 })).toEqual({ b: 2, d: 4 })
})

it('accepts predicate with key as 2nd argument', () => {
  const pred = (val, key) => key === 'a' || key === 'b'
  expect(pickBy(pred, { a: 1, b: 2, c: 3, d: 4 })).toEqual({ a: 1, b: 2 })
})
