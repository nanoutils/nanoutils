var zipWith = require('.')

test('zips with callback', () => {
  const val = zipWith((a, b) => a + b, [1, 10, 100], [2, 20, 200])
  expect(val).toEqual([3, 30, 300])
})
