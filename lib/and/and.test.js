import { expectNumberOfArgs } from '../../cjs/_internal/_test'
import and from '../../cjs/and'

test('it accepts exact 2 arguments', () => {
  expectNumberOfArgs(
    and,
    2,
    [false, true]
  )
})

test('confirms that both of arguments are true', () => {
  expect(and(true, true)).toBeTruthy()
  expect(and(true, false)).toBeFalsy()
  expect(and(false, true)).toBeFalsy()
  expect(and(false, false)).toBeFalsy()
})
