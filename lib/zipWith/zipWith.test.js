var zipWith = require('.')

test('zips with callback', () => {
  expect(zipWith((a, b) => a + b, [1, 10, 100], [2, 20, 200])).toEqual([
    3,
    30,
    300
  ])
})
