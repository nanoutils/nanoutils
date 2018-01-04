var lens = require('../lens')
var setLens = require('.')

var obj = {
  a: 1
}

var lens = lens(obj => obj.a, (a, obj) => ({ ...obj, a }))

test('sets value by lens setter', () => {
  expect(setLens(lens, 2, obj)).toEqual({ a: 2 })
})
