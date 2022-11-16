import { expectNumberOfArgs } from '../../cjs/_internal/_test'
import assoc from '../../cjs/assoc'

test('it accepts exact 3 arguments', () => {
  expectNumberOfArgs(assoc, 3, ['c', 1, { c: 2 }])
})

test('sets value by its path', () => {
  expect(assoc('b', 3, { b: 2 })).toEqual({ b: 3 })
})

test('works correctly for arrays', () => {
  const val = assoc(0, 11, [1, 2, 3])
  expect(val).toEqual([11, 2, 3])
})
