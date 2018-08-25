import until from '.'

test('applies cb to value while condition is falsy', () => {
  var val = until(i => i >= 100, i => i * 2)(2)
  expect(val).toBe(128)
})
