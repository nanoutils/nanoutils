var toPairs = require('.')

test("returns array of arrays with object's key-value pairs", () => {
  const obj = { a: 1, b: 2, c: 3 }

  const func = () => 1
  const obj2 = { a: 'hey', b: func, c: obj }

  expect(toPairs(obj)).toEqual([['a', 1], ['b', 2], ['c', 3]])
  expect(toPairs(obj2)).toEqual([['a', 'hey'], ['b', func], ['c', obj]])
})
