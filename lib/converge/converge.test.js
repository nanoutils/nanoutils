import converge from '.'
import { divide, length, sum } from 'nanoutils'

test("enhance arguments with callbacks from 2rd argument and call 1st with 'em", () => {
  var a = converge((a, b) => a + b, [
    i => i.toUpperCase(),
    i => i.toLowerCase()
  ])
  expect(a('abc')).toBe('ABCabc')
})

test('works for docs', () => {
  const average = converge(divide, [sum, length])

  expect(average([1, 1, 3, 3, 5, 5, 7, 7, 9])).toEqual(4.555555555555555)
})
