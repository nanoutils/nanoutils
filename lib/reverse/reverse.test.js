var reverse = require('.')

test('reverses array', () => {
  expect(reverse([1, 2, 3])).toEqual([3, 2, 1])
})

test('reverses string', () => {
  expect(reverse('123')).toEqual('321')
})
