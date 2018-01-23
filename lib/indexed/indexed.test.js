var indexed = require('.')

test('adds index to unary callbacks', () => {
  var indexed = indexed((val, idx) => val + idx)
  var mapped = ['hello', 'world'].map(val => indexed(val))
  expect(mapped).toEqual(['hello0', 'world1'])
})
