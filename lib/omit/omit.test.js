import omit from '.'

it('returns object with omited properties', () => {
  expect(omit(['a', 'b'], { a: 1, b: 2, c: 3 })).toMatchObject({ c: 3 })
})

it('correctly works with missed properties', () => {
  expect(omit(['a', 'b'], { a: 1, c: 3 })).toMatchObject({ c: 3 })
})
