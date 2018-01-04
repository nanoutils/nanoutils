var unzipWith = require('.')

test('unzips with callback', () => {
  expect(unzipWith([[1, 10, 100], [2, 20, 200]], (a, b) => a + b)).toEqual([
    3,
    30,
    300
  ])
})
