var flip = require('.')

function toArr(a, b, c) {
  return [a, b, c]
}

test('returns array of reversed args', () => {
  expect(flip(toArr)(1, 2, 3)).toEqual([3, 2, 1])
})
