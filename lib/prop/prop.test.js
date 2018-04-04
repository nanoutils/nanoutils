var prop = require('.')

test('returns undefined if a property is not a number of a string', () => {
  expect(prop({ a: 1 }, { a: 3 })).toBeUndefined()
  expect(prop(undefined, { a: 3 })).toBeUndefined()
  expect(prop(null, { a: 3 })).toBeUndefined()
  expect(prop(false, { a: 3 })).toBeUndefined()
})

test('returns value by its property', () => {
  expect(prop('a', { a: 3 })).toBe(3)
})

test('works correctly for arrays', () => {
  var val = prop(0, [1, 2, 3])
  expect(val).toEqual(1)
})

test('sometimes returns weird results', () => {
  expect(prop(['a'], { a: 3 })).toBe(3)
})
