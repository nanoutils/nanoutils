import bind from '.'

test('binds function to context', () => {
  var context = { a: 1 }
  var func = function() { return this.a }
  var bindedFunc = bind(func, context)

  expect(bindedFunc()).toBe(1)
})
