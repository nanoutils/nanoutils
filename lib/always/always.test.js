import { expectNumberOfArgs } from '../_internal/_test'
import always from '.'

test('it accepts exact 1 argument', () => {
  // HACK: call a function without an argument second time
  expectNumberOfArgs(
    always,
    2,
    [1, undefined]
  )
})

test('returns value given in 1st argument', () => {
  expect(always(1)()).toBe(1)
})
