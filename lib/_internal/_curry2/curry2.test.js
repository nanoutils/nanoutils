var curry2 = require('.')

test('curried addition', () => {
  const add = (a, b) => a + b;
  expect(curry2(add)(1, 2)).toBe(3);
  expect(curry2(add)(1)(2)).toBe(3);
});