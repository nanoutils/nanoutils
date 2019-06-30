import indexed from '../../cjs/indexed'

test('adds index to unary callbacks', () => {
  var addKey = indexed((val, idx) => val + idx)
  var mapped = ['hello', 'world'].map(val => addKey(val))
  expect(mapped).toEqual(['hello0', 'world1'])
})
