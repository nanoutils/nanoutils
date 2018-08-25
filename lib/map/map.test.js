import map from '.'

test("double values of an array", () => {
  var arr = [1, 4, 9, 16];
  var double = function(v) {
    return v * 2;
  }
  expect(map(double, arr)).toEqual([2, 8, 18, 32]);
})

test("double values of an object", () => {
  var obj = {a: 1, b: 4, c: 9, d: 16};
  var double = function(v) {
    return v * 2;
  }
  expect(map(double, obj)).toEqual({a: 2, b: 8, c: 18, d: 32});
})