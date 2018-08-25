import mapAccumRight from '.'

var digits = ['1', '2', '3', '4']
var append = (a, b) => [a + b, a + b]
var res = mapAccumRight(append, 5, digits)

test('returns accums array as 1st tuple element', () => {
  expect(res[0]).toEqual(['12345', '2345', '345', '45'])
})

test('returns accum as 2st tuple element', () => {
  expect(res[1]).toEqual('12345')
})
