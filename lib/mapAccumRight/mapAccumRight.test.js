import mapAccumRight from '.'

const digits = ['1', '2', '3', '4']
const append = (a, b) => [a + b, a + b]
const result = mapAccumRight(append, 5, digits)

it('returns array of accums as 1st tuple element', () => {
  expect(result[0]).toEqual(['12345', '2345', '345', '45'])
})

it('returns result of reducer as 2st tuple element', () => {
  expect(result[1]).toBe('12345')
})
