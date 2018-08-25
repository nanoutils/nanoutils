import omit from '.'

test('returns object with omited properties', () => {
  expect(omit(['a', 'b'], { a: 1, b: 2, c: 3 })).toEqual({ c: 3 })
})

test('correctly works with missed properties', () => {
  expect(omit(['a', 'b'], { a: 1, c: 3 })).toEqual({ c: 3 })
})
