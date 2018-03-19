import { expectNumberOfArgs } from '../_internal/_test'
import apply from '.'

test('it accepts exact 2 arguments', () => {
  expectNumberOfArgs(
    apply,
    2,
    [function() { return [].slice.call(arguments) }, [1, 2, 3]]
  )
})

test('applies array of arguments to cb', () => {
  var a = apply(function() {
    return Array.prototype.slice.call(arguments)
  })
  expect(a([1, 2, 3])).toEqual([1, 2, 3])
})
