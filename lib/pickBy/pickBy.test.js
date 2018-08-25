import pickBy from '.'

test('filters an object by predicate applied to its values', () => {
  var isOdd = i => i % 2 === 0
  expect(pickBy(isOdd, { a: 1, b: 2, c: 3, d: 4 })).toEqual({ b: 2, d: 4 })
})

test('predicate also accepts key as 2nd argument', () => {
  var pred = (val, key) => key === 'a' || key === 'b'
  expect(pickBy(pred, { a: 1, b: 2, c: 3, d: 4 })).toEqual({ a: 1, b: 2 })
})
