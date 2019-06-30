import repeat from '../../cjs/repeat'

it('repeats values a specified number of times', () => {
  expect(repeat('hi', 5)).toEqual(['hi', 'hi', 'hi', 'hi', 'hi'])
})

it('makes all values identical', () => {
  var a = repeat({}, 5)
  expect(a[0] === a[1]).toBeTruthy()
})

it('returns empty array if a specified number of times is 0', () => {
  expect(repeat(15, 0)).toEqual([])
})

it('returns empty array if a specified number of times is negative', () => {
  expect(repeat(1, -10)).toEqual([])
})
