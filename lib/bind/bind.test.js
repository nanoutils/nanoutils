import { expectNumberOfArgs } from '../../cjs/_internal/_test'
import bind from '../../cjs/bind'

test('it accepts exact 2 arguments', () => {
  // HACK: call a function without an argument third time
  expectNumberOfArgs(bind, 3, [
    function () {
      return this.d.c
    },
    { d: { c: 1 } },
    undefined,
  ])
})

test('binds function to context', () => {
  var context = { a: 1 }
  var func = function () {
    return this.a
  }
  var bindedFunc = bind(func, context)

  expect(bindedFunc()).toBe(1)
})
