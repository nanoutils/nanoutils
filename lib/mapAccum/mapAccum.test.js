import mapAccum from '.'

var digits = ['1', '2', '3', '4']
var appender = (a, b) => [a + b, a + b]
var res = mapAccum(appender, 0, digits)

test('returns result of reducer as 1st tuple element', () => {
  expect(res[0]).toBe('01234')
})

test('returns array of accums as 2st tuple element', () => {
  expect(res[1]).toEqual(['01', '012', '0123', '01234'])
})
