var prop = require('.')

test('doesn\'t return value if a property is not a number of a string', () => {
  expect(() => prop(['a'], { a: 3 })).toThrowError('Property should be either string or number')
  expect(() => prop({ a: 1 }, { a: 3 })).toThrowError('Property should be either string or number')
  expect(() => prop(undefined, { a: 3 })).toThrowError('Property should be either string or number')
  expect(() => prop(null, { a: 3 })).toThrowError('Property should be either string or number')
  expect(() => prop(false, { a: 3 })).toThrowError('Property should be either string or number')
})

test('returns value by its property', () => {
  expect(prop('a', { a: 3 })).toBe(3)
})

test('works correctly for arrays', () => {
  var val = prop(0, [1, 2, 3])
  expect(val).toEqual(1)
})
