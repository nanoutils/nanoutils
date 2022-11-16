import { expectNumberOfArgs } from '../../cjs/_internal/_test'
import all from '../../cjs/all'

test('it accepts exact 2 arguments', () => {
  expectNumberOfArgs(all, 2, [(i) => i > 5, [4, 5, 6, 7]])
})

test('checks if all array items conforms to cb', () => {
  var allGt5 = all((i) => i > 5)
  expect(allGt5([6, 7, 8, 9, 10])).toBeTruthy()
  expect(allGt5([6, 7, 4, 9, 10])).toBeFalsy()
})
