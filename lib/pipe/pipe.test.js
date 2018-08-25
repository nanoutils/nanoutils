import pipe from './index'

function plus1(a) {
  return a + 1
}
function x2(a) {
  return a * 2
}

test('pipe(plus1, x2)(1) to equal 4', () => {
  expect(pipe(plus1, x2)(1)).toBe(4)
})
