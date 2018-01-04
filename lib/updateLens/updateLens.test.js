var lens = require('../lens')
var updateLens = require('.')

var obj = {
  a: 2
}

var lens = lens(obj => obj.a, (a, obj) => ({ ...obj, a }))

test('updates value by lens setter', () => {
  expect(updateLens(lens, i => i + 1, obj)).toEqual({ a: 3 })
})
