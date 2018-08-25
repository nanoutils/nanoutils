import whilst from '.'

test('applies cb to value while condition is truthy', () => {
  var val = whilst(i => i <= 100, i => i * 2)(2)
  expect(val).toBe(128)
})
