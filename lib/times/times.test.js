var times = require('.')

test('invokes cb N times with current step as argument and returns array', () => {
  expect(times(i => i, 5)).toEqual([0, 1, 2, 3, 4])
})
