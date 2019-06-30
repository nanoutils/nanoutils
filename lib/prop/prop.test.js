import prop from '../../cjs/prop'

it('returns undefined if a property is not a number or a string', () => {
  expect(prop({ a: 1 }, { a: 3 })).toBeUndefined()
  expect(prop(undefined, { a: 3 })).toBeUndefined()
  expect(prop(null, { a: 3 })).toBeUndefined()
  expect(prop(false, { a: 3 })).toBeUndefined()
})

it('returns value by its property', () => {
  expect(prop('a', { a: 3 })).toBe(3)
})

it('works correctly for arrays', () => {
  expect(prop(0, [1, 2, 3])).toBe(1)
})

it('weirdly returns results', () => {
  expect(prop(['a'], { a: 3 })).toBe(3)
})
