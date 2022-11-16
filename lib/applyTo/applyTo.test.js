import { expectNumberOfArgs } from '../../cjs/_internal/_test'
import applyTo from '../../cjs/applyTo'

test('it accepts exact 2 arguments', () => {
  expectNumberOfArgs(applyTo, 2, [40, (x) => x + 1])
})

test('applies callback from 2rd argument to value from 1st', () => {
  const res = applyTo(41)((x) => x + 1)
  expect(res).toBe(42)
})
