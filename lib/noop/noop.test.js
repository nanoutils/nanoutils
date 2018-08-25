import noop from '.'

test('always return undefined', () => {
  expect(noop()).toBe(undefined)
})
