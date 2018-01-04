var zipObject = require('.')

test('creates object with keys from 1st array and values from 2nd', () => {
  expect(zipObject(['a', 'b'], [1, 2])).toEqual({ a: 1, b: 2 })
})

test('ignores extra values', () => {
  expect(zipObject(['a', 'b'], [1, 2, 3])).toEqual({ a: 1, b: 2 })
})

test('sets undefined for extra keys', () => {
  expect(zipObject(['a', 'b', 'c'], [1, 2])).toEqual({
    a: 1,
    b: 2,
    c: undefined
  })
})
