var merge = require('.')

test('returns a new object with the 1st object merged with the 2nd', () => {
  expect(merge({ a: 1, b: 1 }, { b: 2, c: 2 })).toEqual({ a: 1, b: 2, c: 2 })
})
