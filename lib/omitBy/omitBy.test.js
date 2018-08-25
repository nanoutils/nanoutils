import omitBy from '.'

test('filters an object by predicate applied to its values', () => {
  var isOdd = i => i % 2 === 0
  expect(omitBy(isOdd, { a: 1, b: 2, c: 3, d: 4 })).toEqual({ a: 1, c: 3 })
})

test('predicate also accepts key as 2nd argument', () => {
  var pred = (val, key) => key === 'a' || key === 'b'
  expect(omitBy(pred, { a: 1, b: 2, c: 3, d: 4 })).toEqual({ c: 3, d: 4 })
})
