import noop from '../../cjs/noop'

it('always returns undefined', () => {
  expect(noop()).toBe(undefined)
})
