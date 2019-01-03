import of from '.'

it('returns just X wrapped in array', () => {
  expect(of(null)).toEqual(null)
  expect(of([42])).toEqual([42])
})
