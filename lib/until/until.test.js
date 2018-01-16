var until = require('.')

test('applies cb to value until condition becomes false', () => {
  var val = until(i => i <= 100, i => i * 2)(2)
  expect(val).toBe(128)
})
