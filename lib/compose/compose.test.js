import compose from '.'

function plus1(a) {
  return a + 1
}
function x2(a) {
  return a * 2
}

test('compose(plus1, x2)(1) to equal 3', () => {
  expect(compose(plus1, x2)(1)).toBe(3)
})
