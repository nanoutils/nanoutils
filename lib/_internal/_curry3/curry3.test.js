var curry3 = require('.')

test('curried addition', () => {
  const add3 = (a, b, c) => a + b + c;
  expect(curry3(add3)(1, 2, 3)).toBe(6);
  expect(curry3(add3)(1)(2, 3)).toBe(6);
  expect(curry3(add3)(1, 2)(3)).toBe(6);
  expect(curry3(add3)(1)(2)(3)).toBe(6);
});