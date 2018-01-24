var map = require('.')

test("double the initial array", () => {
  var arr = [1, 4, 9, 16];
  var double = function(v) {
    return v * 2;
  }
  expect(map(double, arr)).toEqual([2, 8, 18, 32]);
})