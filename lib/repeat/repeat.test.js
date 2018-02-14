var repeat = require('.')

test('creates an array of N values', () => {
  expect(repeat('hi', 5)).toEqual(['hi', 'hi', 'hi', 'hi', 'hi'])
})

test('all values are equal', () => {
  var a = repeat({}, 5)
  expect(a[0] === a[1]).toBeTruthy()
})
