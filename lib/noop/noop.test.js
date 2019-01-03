import noop from '.'

it('always returns undefined', () => {
  expect(noop()).toBe(undefined)
})
