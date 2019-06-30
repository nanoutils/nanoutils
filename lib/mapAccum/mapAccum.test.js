import mapAccum from '../../cjs/mapAccum'

const digits = ['1', '2', '3', '4']
const appender = (a, b) => [a + b, a + b]
const result = mapAccum(appender, 0, digits)

it('returns result of reducer as 1st tuple element', () => {
  expect(result[0]).toBe('01234')
})

it('returns array of accums as 2nd tuple element', () => {
  expect(result[1]).toEqual(['01', '012', '0123', '01234'])
})
