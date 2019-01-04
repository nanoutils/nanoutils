import pickAll from '.'

it('returns object with picked properties', () => {
  expect(pickAll(['a', 'b'], { a: 1, b: 2, c: 3 })).toEqual({ a: 1, b: 2 })
})

it('sets undefined for missed properties', () => {
  const obj = pickAll(['a', 'b'], { a: 1, c: 3 })
  expect(Object.keys(obj).length).toBe(2)
})
